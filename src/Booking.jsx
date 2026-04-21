import React, { useState } from "react";
import "./Booking.css";
import { toast } from "react-toastify";

function Booking({ title, subtitle, onNewTestimonial }) {
  const [formType, setFormType] = useState("contact");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const type = formData.get("type");
    const name = formData.get("name");
    const email = formData.get("email");
    const session = formData.get("session");
    const date = formData.get("date");
    const vision = formData.get("vision");

    if (type === "testimonial") {
      // Save testimonial to localStorage
      const stored = localStorage.getItem("testimonials");
      const testimonials = stored ? JSON.parse(stored) : [];
      const newTestimonial = { name, vision };
      testimonials.push(newTestimonial);
      localStorage.setItem("testimonials", JSON.stringify(testimonials));

      // Update slider immediately
      if (onNewTestimonial) {
        onNewTestimonial(newTestimonial);
      }

      toast.success(`Thank you, ${name}! Your testimonial has been added.`);
    } else {
      if (!name || !email || !date) {
        toast.error("Please provide name, email, and date for your booking.");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            date,
            session,
            message: vision,
          }),
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "Unable to submit booking.");
        }

        toast.success(
          result.message || "Booking request submitted successfully.",
        );
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    e.target.reset();
    setFormType("contact");
  };

  return (
    <section className="contactform-section" id="Booking-Section">
      <h2 className="section-title">{title}</h2>
      <p className="section-para">{subtitle}</p>

      <div className="contactus">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="typeblock">
            <label htmlFor="type">Inquiry Type:</label>
            <select
              id="type"
              name="type"
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
              required
            >
              <option value="contact">Contact/Booking</option>
              <option value="testimonial">Submit Testimonial</option>
            </select>
          </div>

          <div className="nameblock">
            <label htmlFor="name">Enter Your Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          {formType === "contact" && (
            <>
              <div className="mailblock">
                <label htmlFor="email">Enter Your Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="sessionblock">
                <label htmlFor="booksession">Seesion Type:</label>
                <select name="session" id="sessiontype">
                  <option value="wedding">Wedding Photography</option>
                  <option value="Commercial Shoots">Commercial Shoots</option>
                  <option value="Pre-Wedding Shoots">Pre-Wedding Shoots</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="Podcasts & Media">Podcasts & Media</option>
                  <option value="Product Photography">
                    Product Photography
                  </option>
                  <option value="Documentaries">Documentaries</option>
                </select>
              </div>

              <div className="dateblock">
                <label htmlFor="pickadate">Pick Your Date:</label>
                <input type="date" id="date" name="date" required />
              </div>

              <div className="messageblock">
                <label htmlFor="vision">Tell About Your vision:</label>
                <textarea
                  id="vision"
                  name="vision"
                  rows="4"
                  placeholder="Tell About Your vision..."
                  required
                ></textarea>
              </div>
            </>
          )}

          {formType === "testimonial" && (
            <div className="messageblock">
              <label htmlFor="vision">Your Feedback:</label>
              <textarea
                id="vision"
                name="vision"
                rows="3"
                placeholder="Write your testimonial..."
                required
              ></textarea>
            </div>
          )}

          <button className="submitbtn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
