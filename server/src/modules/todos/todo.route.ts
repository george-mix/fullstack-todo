import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import { createTodoController, getTodosController } from "./todo.controller";
import { createTodoSchema } from "./todo.validation";

const router = express.Router();

router.get("/", getTodosController);

router.post("/", validateRequest(createTodoSchema), createTodoController);

export default router;
