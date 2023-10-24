import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
 
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3023',
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  }));

import rotasUsuario from './entidades/controllers/RotasUsuario';
app.use('/api/usuario',rotasUsuario);
import rotasTime from './entidades/controllers/RotasTimes';
app.use('/api/time',rotasTime);

export {app};
