# ShipDetectionYoloV8
Satellite ship detection using YOLOv8
- This project focuses on detecting ships in satellite images using a YOLOv8 object detection model. The goal was to build a complete pipeline — from dataset preprocessing to model training and deployment as a web app.
# Project Overview
- Detects ships in satellite imagery using object detection
- Converted Pascal VOC annotations (XML) into YOLO format
- Fine-tuned a pretrained YOLOv8 model using transfer learning
- Built a simple Streamlit app to run the model interactively
# Model Details
- Model: YOLOv8 (Ultralytics implementation)
- Task: Object Detection
- Framework: PyTorch
- Class: Ship
The model predicts bounding boxes around ships along with confidence scores.
