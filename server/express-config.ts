import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
 
dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.APP_URL,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  }));

export {app};
