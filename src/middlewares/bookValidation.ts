import { Request, Response, NextFunction } from 'express';
import bookSchema from "../models/book";

export const validateBook = async (req: Request, res: Response, next: NextFunction) => {
  let errorsSchema;
  await bookSchema.validate(req.body, { abortEarly: false }).catch((errors) => {
    errorsSchema = errors;
  });

  if (errorsSchema) {
    return res.status(422).send({ message: errorsSchema });
  }

  next();
}

export default validateBook;