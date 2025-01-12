import Booking from '../models/Booking.js';
import Room from '../models/Room.js';

// Book a room
export const bookRoom = async (req, res, next) => {
    const { name, email, contact, checkInDate, checkOutDate } = req.body;
    try {
        const availableRoom = await Room.findOne({ isAvailable: true });
        if (!availableRoom) {
            return res.status(400).json({ message: 'No rooms available' });
        }

        // noinspection JSUnresolvedVariable
        const roomNumber = availableRoom.number;

        const booking = new Booking({
            name,
            email,
            contact,
            checkInDate,
            checkOutDate,
            roomNumber: roomNumber
        });

        await booking.save();
        availableRoom.isAvailable = false;
        await availableRoom.save();

        res.status(201).json({
            message: 'Room booked successfully',
            bookingDetails: {
                roomNumber: roomNumber,
                guestName: name,
                stayDuration: `${checkInDate} to ${checkOutDate}`
            }
        });
    } catch (error) {
        next(error);
    }
};

// View booking details
export const viewBookingDetails = async (req, res, next) => {
    const { email } = req.params;
    try {
        const booking = await Booking.findOne({ email });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

// View all guests
export const viewAllGuests = async (req, res, next) => {
    try {
        const guests = await Booking.find({ checkOutDate: { $gte: new Date() } });
        res.status(200).json(guests);
    } catch (error) {
        next(error);
    }
};

// Cancel booking
export const cancelBooking = async (req, res, next) => {
    const { email, roomNumber } = req.body;
    try {
        const booking = await Booking.findOneAndDelete({ email, roomNumber });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const room = await Room.findOne({ number: roomNumber });
        room.isAvailable = true;
        await room.save();

        res.status(200).json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        next(error);
    }
};

// Modify booking
export const modifyBooking = async (req, res, next) => {
    const { email, checkInDate, checkOutDate } = req.body;
    try {
        const booking = await Booking.findOne({ email });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        booking.checkInDate = checkInDate;
        booking.checkOutDate = checkOutDate;
        await booking.save();

        res.status(200).json({ message: 'Booking modified successfully' });
    } catch (error) {
        next(error);
    }
};