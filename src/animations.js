// Animation script for fade-in and slide-up effects
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with the animation classes
  const animatedElements = document.querySelectorAll(
    ".hero, .post, .testimonial-card, .Services-section, .contactform-section, .footer-section, .Blog-section, .testimonials",
  );
  animatedElements.forEach((el) => {
    // Check if already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible");
    }
    observer.observe(el);
  });
});
