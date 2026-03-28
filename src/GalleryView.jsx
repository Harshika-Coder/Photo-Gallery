import React from 'react'
import { Link } from "react-router-dom";
import "./GalleryView.css";
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
  const media = [
    { type: "image", url: I1},
    { type: "image", url: I2},
    { type: "image", url: I3},
    { type: "image", url: I4},
    { type: "image", url: I5},
    { type: "image", url: I6},
    { type: "image", url: I7},
    { type: "image", url: I8},
    { type: "image", url: I9},
    { type: "image", url: I10},
    { type: "image", url: I11},
    { type: "image", url: I12},
    { type: "image", url: I13},
    { type: "image", url: I14},
    { type: "image", url: I15},
    { type: "image", url: I16},
    { type: "image", url: I17},
    { type: "image", url: I18},
    { type: "image", url: I19},
    { type: "image", url: I20},
    { type: "image", url: I21},
    { type: "image", url: I22},
    { type: "video", url: "/uploads/video1.mp4" }
  ];
    return (
      <div className='gallery-page'>
        <header className="back-button">
          <Link to="/" className='back-link'> Back to Home </Link>
        </header>
        <div className="display-grid">
          {media.map((item, index) => (
          item.type === "image" ? (
            <img key={index} src={item.url} alt={`media-${index}`} loading='lazy'/>
          ) : (
            <video key={index} controls>
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        ))}
        </div>
      </div>
  )
}

export default GalleryView
