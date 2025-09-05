import express from "express";

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("index", {
    title: "Custom Print DFW",
    message: "Welcome to Custom Print - DFW",
    activePage: "home",
  });
});

// Services page route
router.get("/services", (req, res) => {
  res.render("services", {
    title: "Custom Print DFW - Services",
    message: "Our Services",
    activePage: "services",
  });
});

export default router;
