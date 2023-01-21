import { connection } from "../database/database";

type AuthorProps = {
  id: number,
  name: string
}

export default {
  findByName: async (name: string)  => {
    return connection.query<AuthorProps>('SELECT * FROM author WHERE name=$1', [name]);
  },

  insertUser: async (name: string) => {
    return connection.query(`INSERT INTO author (name) VALUES ($1)`, [name])
  }

}