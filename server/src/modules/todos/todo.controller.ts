import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createTodo, getTodos } from "./todo.service";
import type { CreateTodoValidation } from "./todo.type";

export const getTodosController = async (_: Request, res: Response) => {
  const todos = await getTodos();

  return res.status(StatusCodes.OK).send(todos);
};

export const createTodoController = async (
  req: Request<{}, {}, CreateTodoValidation["body"]>,
  res: Response
) => {
  const { body } = req;
  const todo = await createTodo(body);

  return res.status(StatusCodes.OK).send(todo);
};
