import mongoose from 'mongoose';
import Room from './models/Room.js';
import connectDB from "./config/db.js";

const initializeRooms = async () => {
    try {
        await connectDB()

        const rooms = [];
        for (let i = 1; i <= 100; i++) {
            rooms.push({number: i, isAvailable: true});
        }
        console.log('Connected to database');

        const roomCount = await Room.countDocuments();
        if (roomCount === 0) {
            const rooms = [];
            for (let i = 1; i <= 100; i++) {
                rooms.push({ number: i, isAvailable: true });
            }

            await Room.insertMany(rooms);
            console.log('Rooms initialized successfully');
        } else {
            console.log('Rooms collection is not empty. Skipping initialization.');
        }

        if (mongoose.connection.readyState === 1) {
            await mongoose.connection.close();
        }
    } catch (error) {
        console.error('Error initializing rooms:', error);
        await mongoose.connection.close();
    }
};

await initializeRooms();