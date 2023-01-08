import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createTodo, deleteTodo, findTodo, getTodos } from "./todo.service";
import type { CreateTodoValidation, DeleteTodoValidation } from "./todo.type";

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

export const deleteTodoController = async (
  req: Request<DeleteTodoValidation["params"]>,
  res: Response
) => {
  const _id = req.params._id;

  const todo = await findTodo({ _id });
  if (!todo) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }

  await deleteTodo({ _id });

  return res.sendStatus(StatusCodes.OK);
};
