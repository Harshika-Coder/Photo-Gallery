import "./App.css";
import Navbar from "./Navbar"; 
import Hero from "./Hero";
import Services from "./Services";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
import Footer from "./Footer";
import img1 from "./assets/IMG_2539.JPG.jpeg";
import img2 from "./assets/IMG_2542.JPG.jpeg";
import img3 from "./assets/IMG_2559.JPG.jpeg";
import img4 from "./assets/IMG_2564.JPG.jpeg";
import img5 from "./assets/N1.jpeg";
import img6 from "./assets/N2.jpeg";
import img7 from "./assets/N3.jpeg";
import img8 from "./assets/N4.jpeg";
import img9 from "./assets/N5.jpeg";
import img10 from "./assets/N6.jpeg";
import img11 from "./assets/N7.jpeg";
import img12 from "./assets/N8.jpeg";
import img13 from "./assets/N9.jpeg";
import img14 from "./assets/N10.jpeg";
import img15 from "./assets/N11.jpeg";
import img16 from "./assets/N12.jpeg";
import img17 from "./assets/N13.jpeg";
import img18 from "./assets/N14.jpeg";
import img19 from "./assets/N15.jpeg";
import img20 from "./assets/N16.jpeg";
import img21 from "./assets/N17.jpeg";
import img22 from "./assets/N18.jpeg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
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

  

  return (
    <>
    <Navbar/>
      <Hero
        title="Umang Films & Production"
        description="Explore a world of stunning photography with us."
        buttonText="Book a Session"
        buttonLink="#Booking-Section"
        GalleryLink="#"
        GalleryText="View Gallery"
      />
      <Services
        title="Our Services"
        subtitle="We provide professional photography for every occasion and requirement."
        services={[
          {
            name: "Commercial Shoots",
            image: img3,
            description: "High-quality visuals for brands, ads, and campaigns.",
          },
          {
            name: "Wedding Photography",
            image: img7,
            description: "Capturing timeless memories of your big day.",
          },
          {
            name: "Pre-Wedding Shoots",
            image: img9,
            description: "Romantic storytelling before the wedding day.",
          },
          {
            name: "Event Coverage",
            image: img11,
            description:
              "Dynamic photography for corporate events and celebrations.",
          },
          {
            name: "Podcasts & Media",
            image: img10,
            description:
              "Creative visuals for podcasts, interviews, and shows.",
          },
          {
            name: "Product Photography",
            image: img6,
            description: "Detailed shots to make your products shine.",
          },
          {
            name: "Documentaries",
            image: img15,
            description: "Visual storytelling for impactful narratives.",
          },
        ]}
      />
      <Blog
        title="Latest Blog Posts"
        posts={[
          {
            image: img1,
            alt: "Moments",
            heading: "Capturing Moments: Wedding Photography Tips",
            description:
              "Learn the essential tips for stunning wedding photography that captures the magic of your special day.",
          },
          {
            image: img2,
            alt: "Photography",
            heading: "Portrait Photography: Lighting Techniques",
            description:
              "Discover how proper lighting can transform your portraits and bring out the best in your subjects.",
          },
          {
            image: img3,
            alt: "Commercial Shoots",
            heading: "Commercial Shoots: Behind the Scenes",
            description:
              "A look at what goes into creating compelling commercial photography for brands and businesses.",
          },
          {
            image: img4,
            alt: "Event Photo",
            heading: "Event Photography: Action and Emotion",
            description:
              "How to capture the energy and emotions of live events through dynamic photography.",
          },
          {
            image: img5,
            alt: "Product",
            heading: "Post-Production Magic: Editing Tips",
            description:
              "Essential editing techniques to enhance your photos and create professional-looking results.",
          },
          {
            image: img6,
            alt: "portfolio",
            heading: "Building Your Photography Portfolio",
            description:
              "Tips for curating and presenting your best work to attract clients and opportunities.",
          },
        ]}
      />
      <Testimonials testimonials={testimonials} />
      <Booking
        title="Contact and Booking"
        subtitle="Have questions or want to book a session? Get in touch with us!"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const type = formData.get("type");
          const name = formData.get("name");
          const email = formData.get("email");
          const sessiontype = formData.get("sessiontype");
          const date = formData.get("date");
          const vision = formData.get("vision");

          if (type === "testimonial") {
            setTestimonials((prev) => {
              const newT = [...prev, { name, message }];
              localStorage.setItem("testimonials", JSON.stringify(newT));
              return newT;
            });
            alert(`Thank you, ${name}! Your testimonial has been added.`);
          } else {
            alert(`Thank you, ${name}! We will contact you at ${email}.`);
          }

          e.target.reset();
        }}
      />
      <Footer
        brandName="Umang Films & Production"
        tagline="Capturing memories with creativity."
        year={2026}
        links={[
          { href: "#Home-page", label: "Home" },
          { href: "#Blog-Section", label: "Blog" },
          { href: "#Testimonial-Section", label: "Testimonials" },
          { href: "#Services-Section", label: "Services" },
          { href: "#Booking-Section", label: "Contact Us" },
        ]}
        contacts={[
          { href: "mailto:contact@umangfilms.com", icon: <FaEnvelope size={30}/> },
          { href: "tel:+917317883888", icon: <FaPhone size={30}/> },
          { href: "https://wa.me/917317883888", icon: <FaWhatsapp size={32}/> },
        ]}
        socials={[
          {
            href: "https://instagram.com/naman.jaiswal._",
            icon: <FaInstagram />,
          },
          { href: "https://facebook.com/yourprofile", icon: <FaFacebook /> },
          { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
          { href: "https://youtube.com/@naman.jaiswal._", icon: <FaYoutube /> },
        ]}
      />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
