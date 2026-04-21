import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

const galleryItems = [
  {
    id: 1,
    title: "Sunset Portrait",
    category: "Portrait",
    type: "image",
    imageKey: "gallery1",
  },
  {
    id: 2,
    title: "Urban Fashion",
    category: "Fashion",
    type: "image",
    imageKey: "gallery2",
  },
  {
    id: 3,
    title: "Landscape Story",
    category: "Landscape",
    type: "image",
    imageKey: "gallery3",
  },
];

const services = [
  {
    id: 1,
    name: "Commercial Shoots",
    description: "High-quality visuals for brands, ads, and campaigns.",
    imageKey: "commercial",
  },
  {
    id: 2,
    name: "Pre-Wedding Shoots",
    description: "Romantic storytelling before the wedding day.",
    imageKey: "preWedding",
  },
  {
    id: 3,
    name: "Event Coverage",
    description: "Dynamic photography for corporate events and celebrations.",
    imageKey: "event",
  },
  {
    id: 4,
    name: "Podcasts & Media",
    description: "Creative visuals for podcasts, interviews, and shows.",
    imageKey: "podcasts",
  },
  {
    id: 5,
    name: "Product Photography",
    description: "Detailed shots to make your products shine.",
    imageKey: "product",
  },
  {
    id: 6,
    name: "Documentaries",
    description: "Visual storytelling for impactful narratives.",
    imageKey: "documentaries",
  },
];

// Health check endpoint used by development tools and uptime checks.
// Returns a simple JSON payload with server status and timestamp.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Returns gallery metadata for the frontend gallery page.
// The frontend uses imageKey to map these items to locally bundled gallery assets.
app.get("/api/gallery", (req, res) => {
  res.json({ gallery: galleryItems });
});

// Returns photography services metadata for the services section.
// The frontend maps service names to local image assets for display.
app.get("/api/services", (req, res) => {
  res.json({ services });
});

app.post("/api/bookings", (req, res) => {
  const { name, email, date, message } = req.body;

  if (!name || !email || !date) {
    return res.status(400).json({
      error: "name, email, and date are required",
    });
  }

  const booking = {
    id: Date.now(),
    name,
    email,
    date,
    message: message ?? "",
    status: "received",
  };

  res.status(201).json({
    success: true,
    booking,
    message: "Booking request received successfully.",
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email, and message are required",
    });
  }

  res.status(201).json({
    success: true,
    message: "Thank you for contacting us. We will follow up shortly.",
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
