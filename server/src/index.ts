import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectToDb } from "./helpers/connectToDb";
import todoRouter from "./modules/todos/todo.route";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);

app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);

  await connectToDb();
});
