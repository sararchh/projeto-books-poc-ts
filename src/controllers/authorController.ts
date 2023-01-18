import { Request, Response } from "express";
import { connection } from "../database/database";

import AuthorRepository from "../repository/authorRepository";

export default {
  store: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      const userExists = await AuthorRepository.findByName(name);

      if(userExists.rowCount === 0) {
        const insertUser = await AuthorRepository.insertUser(name);
        return res.status(200).send({ message: "Cadastrado com sucesso!" });
      }
      
      return res.status(409).send({ message: "Autor já cadastrado, verifique!" });
    } catch (error) {
      console.log({ error });
      return res.sendStatus(400);
    }
  }
}