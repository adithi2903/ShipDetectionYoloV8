import Balatro from "./Balatro";
import "./index.css";

export default function App() {
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
          {/* GitHub Top Left */}
          <a
            href="https://github.com/adithi2903/ShipDetectionYoloV8"
            target="_blank"
            rel="noopener noreferrer"
            className="github-top"
          >
            GitHub
          </a>
          {/* LinkedIn Top Right */}
          <a
            href="https://www.linkedin.com/in/adithi-j/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-top"
          >
            Connect on LinkedIn
          </a>
          <h1>| Satellite Ship Detection |</h1>
          <p>
            AI-powered maritime vessel detection using YOLOv<span className="tech-word">8</span> trained on satellite imagery.
          </p>
        </section>

        {/* ABOUT */}
        <section className="glass-card">
          <h2>About The Model</h2>
          <p>
            This project uses YOLOv<span className="tech-word">8</span> object detection architecture to identify ships
            in high-resolution satellite imagery. The model was trained to detect
            vessels across coastal and open-sea environments.
          </p>

          <p style={{ marginTop: "20px" }}>
            The system is deployed using Streamlit and hosted on Hugging Face Spaces,
            enabling real-time inference through a web interface.
          </p>

          {/* PROJECT REPORT BUTTON */}
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

          <div className="demo-container">
            <iframe
              src="https://adithi2903-shipdetectionyolov8.hf.space"
              width="100%"
              height="750px"
              style={{ border: "none" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
