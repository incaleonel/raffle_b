/* solo para hacer pruebas, el cliente no debe acceder*/
import { Request, Response } from "express";
import pool from "../database/connect";

export const reset = async (_req: Request, res: Response) => {
    try {
        const connection = await pool.getConnection();
        await connection.query("UPDATE rifas SET id_cliente=null, status='disponible'")
        await connection.query('DELETE FROM clientes');
        await connection.query('ALTER TABLE clientes AUTO_INCREMENT = 1');
        /* const cantidad = 36;
        let sql = 'INSERT INTO rifas(status) VALUES'
        for (let i = 0; i < cantidad - 1; i++) {
            sql += "('disponible'),"
        }
        sql = sql + "('disponible');"

        await connection.query(sql) */
        connection.release();
        console.log('datos reseteados');
        res.send('reseteo exitoso')
    } catch (err) {
        console.log('hubo un error en el reseteo', err);
        res.send('ocurrio un problema');
    }
    
}