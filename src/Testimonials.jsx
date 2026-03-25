import React, { useCallback, useEffect, useState, useRef } from "react";
import "./Testimonials.css";

export default function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const startSlider = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
  }, [nextSlide]);

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [startSlider, stopSlider]);

  return (
    <section className="testimonials" id="Testimonial-Section">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-para">Here are what our clients say about us!</p>

      <div
        className="testimonial-slider"
        onMouseEnter={stopSlider}
        onMouseLeave={startSlider}
        onTouchStart={stopSlider}
        onTouchEnd={startSlider}
      >
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>"{t.message}"</p>
              <cite>- {t.name}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
