import { TypeOf } from "zod";
import { TodoValidation } from "~~/server/src/validationTypes";

export type TodoItem = TypeOf<typeof TodoValidation>;
