import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import bookingsRouter from './routes/bookings.js';
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.ENV || "dev";

app.use(logger(env));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

connectDB()
    .then(r => console.log('Connected to DB'))
    .catch(err => console.log(err))

app.use('/', indexRouter);
app.use('/bookings', bookingsRouter);

export default app;
