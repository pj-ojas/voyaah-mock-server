import express from 'express';
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';
import trawexRouter from './routers/trawexRouter';


class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    // Automatically allow cross-origin requests
    this.app.use(cors({ origin: true }));

    router.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World! @root'
      });
    });

    router.post('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World! @root'
      });
    });

    this.app.use('/', router);

    this.app.use('/api/hotel_trawexv6/', trawexRouter);

  }
}

export default new App().app;