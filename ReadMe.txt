# 🧑‍⚕️ Skin Disease Detection System (CNN + Full-Stack App)

This project is a **Skin Disease Detection Web Application** that uses a **Convolutional Neural Network (CNN)** model to classify skin conditions.  
The system integrates a **React Frontend**, **Node.js + Express Backend**, **Flask ML API**, and a **MySQL Database** managed through **XAMPP**.

---

## ✨ Features

- 🖼 Upload a skin image for disease prediction.  
- 🤖 CNN-based ML model (`skin.h5`) for classification.  
- 📊 Detects conditions:  
  - Eczema Photos  
  - Malignant Lesions  
  - Nail Fungus & Other Nail Diseases  
  - Healthy Skin  
- ⚠️ Threshold logic → rejects low-confidence predictions as **“Unknown / Not a skin image.”**  
- 👤 User authentication & management (Node + MySQL).  
- 🌐 Cross-origin support for smooth API communication.  

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, Axios, React Router  
- **Backend (API & Auth)**: Node.js, Express, MySQL  
- **ML Backend**: Flask, TensorFlow/Keras, Pillow, NumPy  
- **Database**: MySQL (XAMPP / phpMyAdmin)  

---

## 📂 Folder Structure

H:/                           # Your main drive
└── fyp/                     # Main project folder
    ├── app/                 # Web app (frontend + server + DB)
    │   ├── front-end/       # React frontend code lives here
    │   ├── server/          # Node.js + Express backend lives here
    │   └── database.sql     # SQL file you import into phpMyAdmin (MySQL DB)
    │
    └── python back-end/     # Flask + AI model backend
        ├── appf2.py         # Your Flask API script
        ├── skin.h5          # Your trained CNN model file
        └── .venv + helpers  # Your virtual environment and helper scripts
