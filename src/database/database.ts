import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

  const { Pool } = pg;

  const connection = new Pool({
    host: process.env.DB_HOST,
    port: 5433,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionString: process.env.DATABASE_URL,
  });

  export {connection}

