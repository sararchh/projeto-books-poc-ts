import { Router } from "express";

import validateAuthor from "../middlewares/authorValidation";

import AuthorController from '../controllers/authorController';

const routes = Router();

routes.post("/store-author", [validateAuthor], AuthorController.store);

export default routes;