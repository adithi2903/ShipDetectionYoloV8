import streamlit as st
from ultralytics import YOLO
from PIL import Image
import tempfile
import os

st.set_page_config(page_title="Ship Detection Demo", layout="centered")

st.title("🚢 Satellite Ship Detection")
st.write("Upload a satellite image to detect ships using YOLOv8")

uploaded_file = st.file_uploader("Upload Image", type=["png", "jpg", "jpeg"])

if uploaded_file:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image", use_column_width=True)

    if st.button("Detect Ships"):
        with st.spinner("Running detection..."):
            model = YOLO("best.pt")

            with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp:
                image.save(tmp.name)
                results = model.predict(tmp.name, conf=0.4)

            result_img = results[0].plot()
            st.image(result_img, caption="Detected Ships", use_column_width=True)

            st.success(f"Ships detected: {len(results[0].boxes)}")
