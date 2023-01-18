import { Router } from "express";

import BooksController from '../controllers/booksController';

const routes = Router();

routes.post("/store-books", BooksController.store);

export default routes;