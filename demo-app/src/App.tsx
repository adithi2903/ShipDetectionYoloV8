import { useState } from "react";
import Balatro from "./Balatro";
import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">

      {/* Background */}
      <div className="bg-layer">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={1800}
          contrast={4.2}
          lighting={0.35}
          color1="#0d1b3d"
          color2="#090c24"
          color3="#030712"
        />
      </div>

      {/* Foreground */}
      <div className="content">

        {/* HERO */}
        <section className="hero">
          <a
            href="https://github.com/adithi2903/ShipDetectionYoloV8"
            target="_blank"
            rel="noopener noreferrer"
            className="github-top"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/adithi-j/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-top"
            >
            <span className="short-text">LinkedIn</span>
            <span className="full-text">Connect on LinkedIn</span>
          </a>

          <h1>| Satellite Ship Detection |</h1>
          <p>
            AI-powered maritime vessel detection using YOLOv
            <span className="tech-word">8</span> trained on satellite imagery.
          </p>
        </section>

        {/* ABOUT */}
        <section className="glass-card">
          <h2>About The Model</h2>
          <p>
            This project uses YOLOv8 object detection architecture to identify ships
            in high-resolution satellite imagery.
          </p>

          <p style={{ marginTop: "20px" }}>
            The system is deployed using Streamlit and hosted on Hugging Face Spaces,
            enabling real-time inference through a web interface.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a
              href="/SatelliteShipDetection_ProjectReport.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View Project Report
            </a>
          </div>
        </section>

        {/* LIVE DEMO */}
        <section className="demo-section">
          <h2 style={{ marginBottom: "30px" }}>Live Demo</h2>

          <div
            className="demo-container"
            style={{ position: "relative" }}
          >

            {loading && (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "750px",
                  background: "rgba(10, 15, 40, 0.95)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px",
                  zIndex: 10,
                  textAlign: "center",
                  padding: "20px"
                }}
              >
                Initializing AI engine...
                <br />
                <span style={{ fontSize: "14px", marginTop: "10px", opacity: 0.8 }}>
                  (First load may take about a minute)
                </span>
              </div>
            )}
          <iframe
            src="https://adithi2903-shipdetectionyolov8.hf.space"
            width="100%"
            style={{
              border: "none",
              height: "750px",
              maxHeight: "90vh"
            }}
            onLoad={() => setLoading(false)}
          />
          </div>
        </section>

      </div>
    </div>
  );
}