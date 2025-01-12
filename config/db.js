import mongoose from 'mongoose';
import logger from 'morgan'

const env = process.env.ENV || "dev";
let dbUrl = "";

switch (env) {
    case "dev":
        dbUrl = process.env.DATABASE_URL_DEV;
        mongoose.set('debug', true);
        break;
    case "prod":
        dbUrl = process.env.DATABASE_URL_PROD;
        mongoose.set('debug', false);
        break;
    default:
        dbUrl = process.env.DATABASE_URL_LOCAL;
        mongoose.set('debug', true);
        break;
}

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
            logger(env)('Mongoose connection error:', error);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        logger(env)('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;