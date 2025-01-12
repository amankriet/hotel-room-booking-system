import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    number: { type: Number, required: true, unique: true },
    isAvailable: { type: Boolean, default: true }
});

const Room = mongoose.model('Room', roomSchema);

export default Room;