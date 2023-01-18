import { Request, Response } from "express";
import { connection } from "../database/database";

export default {
  store: async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}