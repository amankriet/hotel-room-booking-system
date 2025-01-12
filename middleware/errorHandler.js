import logger from "morgan";

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
    logger('error:', err.stack);
};

export default errorHandler;