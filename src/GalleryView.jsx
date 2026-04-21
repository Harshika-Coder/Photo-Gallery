import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryView.css";
import Hicon from "./assets/back-to-home-icon.png";
import I1 from "./assets/IMG_2539.JPG.jpeg";
import I2 from "./assets/IMG_2542.JPG.jpeg";
import I3 from "./assets/IMG_2559.JPG.jpeg";
import I4 from "./assets/IMG_2564.JPG.jpeg";
import I5 from "./assets/N1.jpeg";
import I6 from "./assets/N2.jpeg";
import I7 from "./assets/N3.jpeg";
import I8 from "./assets/N4.jpeg";
import I9 from "./assets/N5.jpeg";
import I10 from "./assets/N6.jpeg";
import I11 from "./assets/N7.jpeg";
import I12 from "./assets/N8.jpeg";
import I13 from "./assets/N9.jpeg";
import I14 from "./assets/N10.jpeg";
import I15 from "./assets/N11.jpeg";
import I16 from "./assets/N12.jpeg";
import I17 from "./assets/N13.jpeg";
import I18 from "./assets/N14.jpeg";
import I19 from "./assets/N15.jpeg";
import I20 from "./assets/N16.jpeg";
import I21 from "./assets/N17.jpeg";
import I22 from "./assets/N18.jpeg";

function GalleryView() {
  const galleryMap = {
    gallery1: I1,
    gallery2: I2,
    gallery3: I3,
    gallery4: I4,
    gallery5: I5,
    gallery6: I6,
    gallery7: I7,
    gallery8: I8,
    gallery9: I9,
    gallery10: I10,
    gallery11: I11,
    gallery12: I12,
    gallery13: I13,
    gallery14: I14,
    gallery15: I15,
    gallery16: I16,
    gallery17: I17,
    gallery18: I18,
    gallery19: I19,
    gallery20: I20,
    gallery21: I21,
    gallery22: I22,
  };

  const initialMedia = [
    { type: "image", url: I1 },
    { type: "image", url: I2 },
    { type: "image", url: I3 },
    { type: "image", url: I4 },
    { type: "image", url: I5 },
    { type: "image", url: I6 },
    { type: "image", url: I7 },
    { type: "image", url: I8 },
    { type: "image", url: I9 },
    { type: "image", url: I10 },
    { type: "image", url: I11 },
    { type: "image", url: I12 },
    { type: "image", url: I13 },
    { type: "image", url: I14 },
    { type: "image", url: I15 },
    { type: "image", url: I16 },
    { type: "image", url: I17 },
    { type: "image", url: I18 },
    { type: "image", url: I19 },
    { type: "image", url: I20 },
    { type: "image", url: I21 },
    { type: "image", url: I22 },
    { type: "video", url: "/uploads/video1.mp4" },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const lastTapRef = useRef(0);
  const openImage = (url) => {
    setSelectedImage(url);
    setZoomed(false);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setZoomed(false);
  };
  const handleImageClick = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      // double tap detected
      closeModal();
    } else {
      // single tap toggles zoom
      setZoomed((prev) => !prev);
    }
    lastTapRef.current = now;
  };

  const [media, setMedia] = useState(initialMedia);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        const result = await response.json();
        if (
          response.ok &&
          Array.isArray(result.gallery) &&
          result.gallery.length > 0
        ) {
          const mappedMedia = result.gallery.map((item) => {
            if (item.type === "image") {
              return {
                ...item,
                url: galleryMap[item.imageKey] ?? item.url,
              };
            }
            return item;
          });
          setMedia(mappedMedia);
        }
      } catch (error) {
        console.warn("Failed to load gallery data from backend:", error);
      }
    };

    loadGallery();
  }, []);

  return (
    <div className="gallery-page">
      <header className="back-button">
        <Link to="/" className="back-link">
          <img src={Hicon} alt="Back to home" />
        </Link>
      </header>
      {isLoading && (
        <p style={{ textAlign: "center", marginTop: "80px" }}>
          Loading gallery...
        </p>
      )}
      <div className="display-grid">
        {media && media.length > 0 ? (
          media.map((item, index) =>
            item.type === "image" ? (
              <img
                key={index}
                src={item.url}
                alt={`media-${index}`}
                loading="lazy"
                onClick={() => openImage(item.url)}
              />
            ) : (
              <video key={index} controls>
                <source src={item.url} type="video/mp4" />
              </video>
            ),
          )
        ) : (
          <p>No media available</p>
        )}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="Selected"
            className={zoomed ? "zoomed" : ""}
            onClick={(e) => {
              e.stopPropagation();
              handleImageClick();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default GalleryView;
