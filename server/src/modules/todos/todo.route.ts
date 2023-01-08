import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.middleware";
import {
  createTodoController,
  deleteTodoController,
  getTodosController,
  updateTodoController,
} from "./todo.controller";
import {
  createTodoSchema,
  deleteTodoSchema,
  updateTodoSchema,
} from "./todo.validation";

const router = express.Router();

router.get("/", getTodosController);

router.post("/", validateRequest(createTodoSchema), createTodoController);

router.delete("/:_id", validateRequest(deleteTodoSchema), deleteTodoController);

router.put("/:_id", validateRequest(updateTodoSchema), updateTodoController);

export default router;
