from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={
     r"/upload": {"origins": "http://localhost:3000"}}, supports_credentials=True)

model_path = r'D:\\FinalYearProject\\skin\\skin.h5'
model = load_model(model_path)


def preprocess_image(image, target_size):
    image = image.convert("L")  # Convert image to grayscale
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=-1)  # Add a channel dimension
    image = np.expand_dims(image, axis=0)  # Add a batch dimension
    image = image / 255.0  # Rescale to [0, 1]
    return image


@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    try:
        image = Image.open(file)
        processed_image = preprocess_image(image, target_size=(200, 200))

        prediction = model.predict(processed_image)
        # Get the index of the class with highest probability
        predicted_class = np.argmax(prediction[0])

        class_labels = ['Eczema Photos', 'Malignant Lesions',
                        'Nail Fungus and other Nail Disease', 'Healthy Skin']
        prediction_text = class_labels[predicted_class]

        return jsonify({'prediction': prediction_text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000)
