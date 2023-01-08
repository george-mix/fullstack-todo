import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import {
  createTodoController,
  deleteTodoController,
  getTodosController,
} from "./todo.controller";
import { createTodoSchema, deleteTodoSchema } from "./todo.validation";

const router = express.Router();

router.get("/", getTodosController);

router.post("/", validateRequest(createTodoSchema), createTodoController);

router.delete("/:_id", validateRequest(deleteTodoSchema), deleteTodoController);

export default router;
