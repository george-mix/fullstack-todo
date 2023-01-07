import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getTodos } from "./todo.service";

export const getTodosController = async (_: Request, res: Response) => {
  const todos = await getTodos();

  return res.status(StatusCodes.OK).send(todos);
};
