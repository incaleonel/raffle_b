import { Request, Response } from "express";
import pool from '../database/connect';
import { ResultSetHeader } from "mysql2";


export const uploadForm = async(req: Request,res:Response)=>{
    const {tickets,firstName,lastName,email,instagramUsername} = req.body;
    
    try{
      const { path } = req.file ?? { path: undefined };;
      const connection = await pool.getConnection();
      const [ result ] = await connection.query(`INSERT INTO clientes(nombre,apellido,email,user_ig,comprobante) VALUES('${firstName}','${lastName}','${email}','${instagramUsername}','${path}')`)
      if ('insertId' in result) {
        const lastInsertId = (result as ResultSetHeader).insertId;// Imprime el ID de la última fila insertada
         
         JSON.parse(tickets).map(async(num:number)=>{
        await connection.query(`UPDATE rifas SET status='reservado', id_cliente=${lastInsertId} WHERE number=${num}`)
      })
      }else
        throw new Error('hubo un problema al insertar el usuario');

      
      connection.release();
    res.send('Recibido exitosamente')
    }catch(err){
      console.log('algo ocurrio',err)
    }
    
  }