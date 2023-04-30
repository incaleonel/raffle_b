/* import express from 'express';
import bodyParser from 'body-parser';
import pool from './database/connect';
import cors from 'cors';
import upload from './configUpload';

// Creación de la aplicación de Express
const app = express();
// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
 
async function updateValue(id: number, nuevoValor: string) {
  try {
    // Se obtiene una conexión del pool de conexiones
    const connection = await pool.getConnection();

    // Se ejecuta la consulta asincrónica utilizando promesas
    const [rows] = await connection.execute(
      'UPDATE rifas SET status = ? WHERE number = ?',
      [nuevoValor, id]
    );

    // Se libera la conexión al pool de conexiones
    connection.release();

    console.log(`Se actualizó el valor de la fila con number ${id}`, rows);
  } catch (error) {
    console.error(error);
  }
}
// Rutas de la aplicación
app.get('/', (_req, res) => {
  
  res.send('INICIANDO APP')
  
});
app.get('/api/rifas', async(_req, res)=>{
  try{
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT number, status FROM rifas')
    connection.release();
    res.send(rows)
    console.log('dato consumido')
  }catch(err){
    console.error(err)
  }
  
})
app.put('/api/rifas/:number',async(req,res)=>{
  const number = Number(req.params.number) ;
  
  await updateValue(number,'reservado')
  res.send('Reservado con exito')

})

app.put('/api/check/:number',async(req,res)=>{
  const number = Number(req.params.number) ;
  
  await updateValue(number,'vendido')
  res.send('Vendido con exito')

})
app.delete('/api/reset',async(_req,res)=>{
  
  try{
    const connection = await pool.getConnection();
    
    const [rows] = await connection.query("UPDATE rifas SET status='disponible', id_cliente=null");
    
    connection.release();
    res.send(rows)
    console.log('datos borrados')
  }catch(err){
    console.error(err)
  }

})
app.post('/api/check',upload.single('file'),async(req,res)=>{
  const {tickets,firstName,lastName,email,instagramUsername} = req.body;
  
  try{
    const { path } = req.file ?? { path: undefined };;
    const connection = await pool.getConnection();
    const data = await connection.query(`INSERT INTO clientes(nombre,apellido,email,user_ig,comprobante) VALUES('${firstName}','${lastName}','${email}','${instagramUsername}','${path}')`)
    console.log(data);
    JSON.parse(tickets).map(async(num:number)=>{
      await connection.query(`UPDATE rifas SET status='reservado' WHERE number=${num}`)
    })
    connection.release();
  res.send('Recibido exitosamente')
  }catch(err){
    console.log('algo ocurrio',err)
  }
  
})
// Inicio del servidor
const port = 3001;
app.listen(port, async() => {
  
  console.log(`Servidor iniciado en el puerto ${port}`);
}); */

import Server from './models/Server';

new Server();