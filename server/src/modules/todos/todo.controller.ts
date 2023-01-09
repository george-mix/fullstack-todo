import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createTodo,
  deleteTodo,
  findAndUpdateTodo,
  findTodo,
  getTodos,
} from "./todo.service";
import type {
  CreateTodoValidation,
  DeleteTodoValidation,
  GetTodoValidation,
  UpdateTodoValidation,
} from "./todo.type";

export const getTodoController = async (
  req: Request<GetTodoValidation["params"]>,
  res: Response
) => {
  try {
    const todo = await findTodo({ _id: req.params._id });
    if (!todo) {
      throw new Error("Todo not found!");
    }

    return res.status(StatusCodes.OK).send(todo);
  } catch (error) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
};

export const getTodosController = async (_: Request, res: Response) => {
  try {
    const todos = await getTodos();

    return res.status(StatusCodes.OK).send(todos);
  } catch (error) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const createTodoController = async (
  req: Request<{}, {}, CreateTodoValidation["body"]>,
  res: Response
) => {
  try {
    const { body } = req;
    const todo = await createTodo(body);

    return res.status(StatusCodes.OK).send(todo);
  } catch (error) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteTodoController = async (
  req: Request<DeleteTodoValidation["params"]>,
  res: Response
) => {
  try {
    const _id = req.params._id;

    const todo = await findTodo({ _id });
    if (!todo) {
      throw new Error("Todo not found!");
    }

    await deleteTodo({ _id });

    return res.sendStatus(StatusCodes.OK);
  } catch (error) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
};

export const updateTodoController = async (
  req: Request<
    UpdateTodoValidation["params"],
    {},
    UpdateTodoValidation["body"]
  >,
  res: Response
) => {
  try {
    const _id = req.params._id;
    const update = req.body;

    const updatedTodo = await findAndUpdateTodo({ _id }, update);
    if (!updatedTodo) {
      throw new Error("Todo not found!");
    }

    return res.status(StatusCodes.OK).send(updatedTodo);
  } catch (error) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
};
