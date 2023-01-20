import { Router } from "express";
import validateBook from "../middlewares/bookValidation";

import BooksController from '../controllers/booksController';

const routes = Router();

routes.post("/store-books",[validateBook], BooksController.store);
routes.get("/books", BooksController.findAll);
routes.get("/books/:id",  BooksController.findOne);
routes.delete("/books/:id",  BooksController.deleteOne);
routes.put("/books/:id", [validateBook], BooksController.updateOne);

export default routes;