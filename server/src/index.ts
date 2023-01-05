import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Test connection");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server statred on port ${PORT}`);
});
