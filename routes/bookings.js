import { Router } from 'express';
import {
  bookRoom,
  viewBookingDetails,
  viewAllGuests,
  cancelBooking,
  modifyBooking
} from '../controllers/bookings.js';

const router = Router();

router.post('/book', bookRoom);
router.get('/view/:email', viewBookingDetails);
router.get('/view-all', viewAllGuests);
router.delete('/cancel', cancelBooking);
router.put('/modify', modifyBooking);

export default router;