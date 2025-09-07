# Paste this entire file to H:\gpt help\python back-end\appf2.py (replace previous)
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
from flask_cors import CORS
import os
import traceback

app = Flask(__name__)
CORS(app, resources={
     r"/upload": {"origins": "http://localhost:3000"}}, supports_credentials=True)

# model path (same folder as appf2.py)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, 'skin.h5')
model = load_model(model_path)

class_labels = ['Eczema Photos', 'Malignant Lesions',
                'Nail Fungus and other Nail Disease', 'Healthy Skin']

# threshold (tuneable)
THRESHOLD = 0.75  # default; adjust after testing


def preprocess_image(image, target_size):
    image = image.convert("L")  # grayscale
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=-1)  # channel
    image = np.expand_dims(image, axis=0)   # batch
    image = image / 255.0
    return image


@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        image = Image.open(file)
        processed_image = preprocess_image(image, target_size=(200, 200))

        preds = model.predict(processed_image)[0]   # numpy array
        best_idx = int(np.argmax(preds))
        best_p = float(preds[best_idx])

        # Map class -> probability for clearer response
        probs_dict = {label: float(preds[i])
                      for i, label in enumerate(class_labels)}

        # Console log (helps tuning)
        print("=== PREDICTION ===")
        print("probs:", probs_dict)
        print("best:", class_labels[best_idx], best_p)
        print("==================")

        # Decide known vs unknown
        is_known = best_p >= THRESHOLD

        if not is_known:
            response = {
                "prediction": "Unknown / Not a skin image",
                "predicted_index": None,
                "confidence": best_p,
                "probabilities": probs_dict,
                "is_known": False
            }
        else:
            response = {
                "prediction": class_labels[best_idx],
                "predicted_index": best_idx,
                "confidence": best_p,
                "probabilities": probs_dict,
                "is_known": True
            }

        return jsonify(response), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    print("Loading model from:", model_path)
    app.run(port=5000)
