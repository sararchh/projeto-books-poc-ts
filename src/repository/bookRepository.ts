import { connection } from "../database/database";

interface Books {
  id: number,
  name: string,
  active: boolean,
  author: number,
  created_at: Date
}

export default {
  findByName: async (name: string) => {
    return connection.query<Books>('SELECT * FROM books WHERE name=$1', [name]);
  },

  findById: async (id: string) => {
    return connection.query<Books>('SELECT * FROM books WHERE id=$1', [id]);
  },

  findAll: async () => {
    return connection.query<Books>('SELECT * FROM books');
  },

  insertBook: async (name: string, authorId: number) => {
    return connection.query(`INSERT INTO books (name,author) VALUES ($1,$2)`, [name, authorId]);
  },

  deleteById: async (id: string) => {
    return connection.query('DELETE FROM books WHERE id=$1', [id]);
  },

  updateById: async (name: string, authorId: number, active: boolean = true, id: string) => {
    return connection.query(`UPDATE books SET name=$1, author=$2, active=$3 WHERE id = $4`, [name, authorId, active, id]);
  },
}