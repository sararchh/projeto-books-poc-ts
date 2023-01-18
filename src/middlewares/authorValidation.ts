import { Request, Response, NextFunction } from 'express';
import authorSchema from "../models/author";

export const validateAuthor = async (req: Request, res: Response, next: NextFunction) => {
  let errorsSchema;
  await authorSchema.validate(req.body, { abortEarly: false }).catch((errors) => {
    errorsSchema = errors;
  });

  if (errorsSchema) {
    return res.status(422).send({ message: errorsSchema });
  }

  next();
}

export default validateAuthor;