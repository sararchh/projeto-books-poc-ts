import { Request, Response } from "express";

import BookRepository from "../repository/bookRepository";

type BooksProps = {
  name: string,
  authorId: number
}

export default {
  store: async (req: Request, res: Response) => {
    try {
      const { name, authorId } = req.body as BooksProps;

      const findByName = await BookRepository.findByName(name);

      if (findByName.rowCount !== 0) {
        return res.status(409).send({ message: "Livro já cadastrado" });
      }

      await BookRepository.insertBook(name, authorId);

      return res.sendStatus(201);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  findAll: async (req: Request, res: Response) => {
    try {

      const findAll = await BookRepository.findAll();

      return res.status(200).send(findAll.rows);
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  deleteOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const resp = await BookRepository.deleteById(id);

      if (resp.rowCount === 0) {
        return res.status(400).send({ message: "Livro não encontrado!" });
      }

      return res.status(200).send({ message: "Deletado com sucesso!" });
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  updateOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, authorId, active } = req.body;

      const resp = await BookRepository.updateById(name, authorId, active, id);

      if (resp.rowCount === 0) {
        return res.status(400).send({ message: "Livro não encontrado!" });
      }

      return res.status(200).send({ message: "Atualizado com sucesso!" });
    } catch (error) {
      return res.sendStatus(400);
    }
  },

  findOne: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const findById = await BookRepository.findById(id);

      if (findById.rowCount !== 0) {
        return res.status(200).send(findById.rows);
      }

      return res.sendStatus(400);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}