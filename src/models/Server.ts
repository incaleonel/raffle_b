import express, { Application } from 'express';
import cors from 'cors';
import config from '../config/index';
import routerRaffle from '../routes/raffle.route';

export default class Server {
    private app: Application;
    private port: string;
    constructor(){
        this.app = express();
        this.port = config.port as string; 
        this.middlewares();
        this.routes();
        this.listen();
    }
    routes(){
        this.app.use('/api/raffles',routerRaffle);
    }

    middlewares(){
        // Configurar body-parser
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(cors());
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server listener on port ${this.port}`)
        } )
    }
}