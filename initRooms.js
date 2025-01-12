import mongoose from 'mongoose';
import Room from './models/Room.js';
import connectDB from "./config/db.js";

const initializeRooms = async () => {
    try {
        await connectDB()

        const rooms = [];
        for (let i = 1; i <= 100; i++) {
            rooms.push({ number: i, isAvailable: true });
        }

        await Room.insertMany(rooms);
        console.log('Rooms initialized successfully');
        await mongoose.connection.close();
    } catch (error) {
        console.error('Error initializing rooms:', error);
        await mongoose.connection.close();
    }
};

await initializeRooms();