import { Request,Response } from "express";
import pool from '../database/connect';

export const sendListRaffles = async(_req: Request, res: Response)=>{
    try{
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT number, status FROM rifas')
      connection.release();
      res.send(rows)
      console.log('dato consumido')
    }catch(err){
      console.error(err)
    }
    
  }