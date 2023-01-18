import { Router } from "express";

import booksRouter from "../routes/booksRouter"
import authorRouter from "./authorRouter"

const routes = Router();

routes.use(booksRouter);
routes.use(authorRouter);

routes.get('/', (req, res, next) => {
  return res.status(200).json({ message: "Servidor em operacao" })
});

routes.get('*', (req, res, next) => {
   return res.status(200).json({ message: "Não existe requisicao para rota solicitada!" })
 })

export default routes;
