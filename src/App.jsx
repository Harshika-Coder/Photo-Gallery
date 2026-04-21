import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import GalleryView from "./GalleryView";
import img1 from "./assets/IMG_2539.JPG.jpeg";
import img2 from "./assets/IMG_2542.JPG.jpeg";
import img3 from "./assets/IMG_2559.JPG.jpeg";
import img4 from "./assets/IMG_2564.JPG.jpeg";
import img5 from "./assets/N1.jpeg";
import img6 from "./assets/N2.jpeg";
import img7 from "./assets/N3.jpeg";
import img9 from "./assets/N5.jpeg";
import img10 from "./assets/N6.jpeg";
import img11 from "./assets/N7.jpeg";
import img15 from "./assets/N11.jpeg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [testimonials, setTestimonials] = useState(() => {
    const stored = localStorage.getItem("testimonials");
    return stored
      ? JSON.parse(stored)
      : [
          {
            name: "Rajesh Kumar",
            message: "Excellent service and amazing photography skills.",
          },
          {
            name: "Priya Singh",
            message: "Good work! I'm really satisfied with the results.",
          },
          {
            name: "Amit Patel",
            message: "Great experience from start to finish.",
          },
        ];
  });

  const images = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img9,
    img10,
    img11,
    img15,
  };

  return (
    <Router>
      <Navbar />
      <main id="main-content" className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                testimonials={testimonials}
                setTestimonials={setTestimonials}
                images={images}
              />
            }
          />
          <Route path="/gallery-page" element={<GalleryView />} />
        </Routes>
      </main>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default App;
