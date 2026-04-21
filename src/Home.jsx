import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "./Hero";
import Services from "./Services";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
import Footer from "./Footer";
import { setupAnimations } from "./animations.js";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Home({ testimonials, setTestimonials, images }) {
  const [searchParams] = useSearchParams();
  const defaultServices = [
    {
      name: "Commercial Shoots",
      image: images.img3,
      description: "High-quality visuals for brands, ads, and campaigns.",
    },
    {
      name: "Pre-Wedding Shoots",
      image: images.img9,
      description: "Romantic storytelling before the wedding day.",
    },
    {
      name: "Event Coverage",
      image: images.img11,
      description: "Dynamic photography for corporate events and celebrations.",
    },
    {
      name: "Podcasts & Media",
      image: images.img10,
      description: "Creative visuals for podcasts, interviews, and shows.",
    },
    {
      name: "Product Photography",
      image: images.img6,
      description: "Detailed shots to make your products shine.",
    },
    {
      name: "Documentaries",
      image: images.img15,
      description: "Visual storytelling for impactful narratives.",
    },
  ];

  const [services, setServices] = useState(defaultServices);
  const [servicesLoading, setServicesLoading] = useState(true);

  const serviceImageMap = {
    "Commercial Shoots": images.img3,
    "Pre-Wedding Shoots": images.img9,
    "Event Coverage": images.img11,
    "Podcasts & Media": images.img10,
    "Product Photography": images.img6,
    Documentaries: images.img15,
  };

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch("/api/services");
        const result = await response.json();
        if (response.ok && Array.isArray(result.services)) {
          const mappedServices = result.services.map((service) => ({
            ...service,
            image: serviceImageMap[service.name] ?? images.img3,
          }));
          setServices(mappedServices);
        }
      } catch (error) {
        console.warn("Failed to load services from backend:", error);
      } finally {
        setServicesLoading(false);
      }
    };

    loadServices();
  }, [
    images.img3,
    images.img6,
    images.img9,
    images.img10,
    images.img11,
    images.img15,
  ]);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const sectionMap = {
        blog: "#Blog-Section",
        testimonials: "#Testimonial-Section",
        services: "#Services-Section",
        booking: "#Booking-Section",
      };

      const sectionId = sectionMap[section];
      if (sectionId) {
        const element = document.querySelector(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [searchParams]);

  // Setup animations after component mounts
  useEffect(() => {
    // Use a small timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setupAnimations();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero
        title="Umang Films & Production"
        description="Explore a world of stunning photography with us."
        buttonText="Book a Session"
        buttonLink="#Booking-Section"
        GalleryLink="/gallery-page"
        GalleryText="View Gallery"
      />
      <Services
        title="Our Services"
        subtitle="We provide professional photography for every occasion and requirement."
        services={services}
      />
      <Blog
        title="Latest Blog Posts"
        posts={[
          {
            image: images.img1,
            alt: "Moments",
            heading: "Capturing Moments: Wedding Photography Tips",
            description:
              "Learn the essential tips for stunning wedding photography that captures the magic of your special day.",
          },
          {
            image: images.img2,
            alt: "Photography",
            heading: "Portrait Photography: Lighting Techniques",
            description:
              "Discover how proper lighting can transform your portraits and bring out the best in your subjects.",
          },
          {
            image: images.img3,
            alt: "Commercial Shoots",
            heading: "Commercial Shoots: Behind the Scenes",
            description:
              "A look at what goes into creating compelling commercial photography for brands and businesses.",
          },
          {
            image: images.img4,
            alt: "Event Photo",
            heading: "Event Photography: Action and Emotion",
            description:
              "How to capture the energy and emotions of live events through dynamic photography.",
          },
          {
            image: images.img5,
            alt: "Product",
            heading: "Post-Production Magic: Editing Tips",
            description:
              "Essential editing techniques to enhance your photos and create professional-looking results.",
          },
        ]}
      />
      <Testimonials testimonials={testimonials} />
      <Booking
        title="Contact and Booking"
        subtitle="Have questions or want to book a session? Get in touch with us!"
        onNewTestimonial={(newTestimonial) => {
          setTestimonials((prev) => {
            const next = [...prev, newTestimonial];
            localStorage.setItem("testimonials", JSON.stringify(next));
            return next;
          });
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
          {
            href: "mailto:contact@umangfilms.com",
            icon: <FaEnvelope size={30} />,
          },
          { href: "tel:+917317883888", icon: <FaPhone size={30} /> },
          {
            href: "https://wa.me/917317883888",
            icon: <FaWhatsapp size={32} />,
          },
        ]}
        socials={[
          {
            href: "https://instagram.com/naman.jaiswal._",
            icon: <FaInstagram />,
          },
          {
            href: "https://facebook.com/yourprofile",
            icon: <FaFacebook />,
          },
          {
            href: "https://youtube.com/@naman.jaiswal._",
            icon: <FaYoutube />,
          },
        ]}
      />
    </>
  );
}

export default Home;
