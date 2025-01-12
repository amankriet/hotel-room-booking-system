import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

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

export default dbUrl;