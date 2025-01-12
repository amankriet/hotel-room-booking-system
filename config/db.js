import mongoose from 'mongoose';
import logger from 'morgan'
import dotenv from 'dotenv';
import dbUrl from "./dbUrl.js";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('MongoDB connected');

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to DB');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from DB');
        });

        mongoose.connection.on('error', (error) => {
            console.error('Mongoose connection error:', error);
            logger('Mongoose connection error:', error);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        logger('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;