import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// set view engine
app.set("view engine", "ejs");

// static files
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});