## Satellite Ship Detection using YOLOv8
*Live Demo:*
https://ship-detection-yolo-v8.vercel.app  

---

*Project Overview*
This project focuses on detecting ships in high-resolution satellite imagery using a YOLOv8 object detection model.  

The goal was to build a complete end-to-end pipeline — from dataset preprocessing and model training to deployment as an interactive web application.

---

*Key Features*

- Detects ships in satellite images using object detection
- Converted Pascal VOC (XML) annotations to YOLO format
- Fine-tuned a pretrained YOLOv8 model using transfer learning
- Built an interactive Streamlit application for real-time inference
- Deployed model using Hugging Face Spaces
- Created a React frontend and deployed on Vercel

---

*Model Details*

- **Model:** YOLOv8 (Ultralytics implementation)
- **Task:** Object Detection
- **Framework:** PyTorch
- **Class:** Ship

The model predicts bounding boxes around ships along with confidence scores for each detection.

---

*Deployment Architecture*

Frontend (React + Vite) → Vercel  
Backend (Streamlit + YOLOv8) → Hugging Face Spaces  

This architecture allows real-time ship detection directly from the browser.

---

*Project Report*

Available inside the deployed website.
