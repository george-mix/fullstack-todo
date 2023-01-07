import express from "express";
import { getTodosController } from "./todo.controller";

const router = express.Router();

router.get("/", getTodosController);

export default router;
