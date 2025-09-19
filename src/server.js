import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";

import v1Router from "./routes/v1.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(express.static(path.join(process.cwd(), "src/public")));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use("/", v1Router);

app.listen(port, () => {
  console.log(`running at: http://localhost:${port}`);
});
