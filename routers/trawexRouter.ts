import express from 'express';
import { Request, Response } from "express";
import { request } from 'http';
import trawexMockData from '../models/trawexMockData';


const trawexRouter = express.Router();
trawexRouter.get('/hotel_search', async (req: Request, res: Response) => {
  try {
    const serialNumber: string = req.query.serialNumber as string;
    const result =  trawexMockData.getHotels();
    res.status(200).send(result);
  }
  catch(error) {
    res.status(400).send({
      status: 'failed',
      error: JSON.stringify(error)
    });
  }

});


export default trawexRouter;