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



/* const cantidad = 36;
let sql = 'INSERT INTO rifas(status) VALUES'
for(let i=0; i < cantidad - 1 ; i++){
  sql+= "('disponible'),"
}
sql = sql + "('disponible');"
// Consulta a la base de datos
pool.query('TRUNCATE TABLE rifas;').then( ()=>{
  console.log('contenido de tabla limpio')
  pool.query(sql).then( ()=>{
  console.log('insercion exitosa')
  pool.end();
})
})
 */

