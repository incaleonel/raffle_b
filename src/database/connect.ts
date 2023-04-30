import {createPool} from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
// Configuración de la base de datos  
const pool=createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  })
export default pool;



