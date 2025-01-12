import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    roomNumber: { type: Number, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;