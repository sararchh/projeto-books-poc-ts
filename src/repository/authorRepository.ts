import { connection } from "../database/database";

export default {
  findByName: async (name: string) => {
    return connection.query('SELECT * FROM author WHERE name=$1', [name]);
  },

  insertUser: async (name: string) => {
    return connection.query(`INSERT INTO author (name) VALUES ($1)`, [name])
  }

}