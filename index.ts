import express from 'express';
import { Request, Response } from "express";
import App from './app';

const port: Number = 3333;
App.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
