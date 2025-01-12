import logger from "morgan";

const env = process.env.ENV || "dev";

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
    logger(env)('error:', err.stack);
};

export default errorHandler;