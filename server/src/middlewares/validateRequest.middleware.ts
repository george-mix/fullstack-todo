import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { StatusCodes } from "http-status-codes";

export const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json(error);
    }
  };
