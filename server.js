import express from "express";
import routes from "./backend/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "./backend/views"); 
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});