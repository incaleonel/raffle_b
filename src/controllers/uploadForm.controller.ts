import { Request, Response } from "express";
import pool from '../database/connect';

export const uploadForm = async(req: Request,res:Response)=>{
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
    
  }