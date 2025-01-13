# Hotel Room Booking System

This project is a Node.js API for managing hotel room bookings. It provides endpoints for booking rooms, viewing bookings, modifying bookings, and canceling bookings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/hotel-room-booking-system.git
    ```
2. Navigate to the project directory:
    ```sh
    cd hotel-room-booking-system
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up the environment variables by creating a `.env` file in the root directory and adding the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=3001
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The API will be available at `http://localhost:3001`.

## API Endpoints

### Bookings

- **Book a Room**
    - **URL:** `POST /bookings/book`
    - **Body:**
        ```json
        {
            "name": "Aman",
            "email": "amankriet@gmail.com",
            "contact": "8439775478",
            "checkInDate": "2025-01-14",
            "checkOutDate": "2025-01-15"
        }
        ```

- **View All Bookings**
    - **URL:** `GET /bookings/view-all`

- **View Booking by Email**
    - **URL:** `GET /bookings/view`
    - **Query Parameters:**
        - `email`: The email of the guest

- **Cancel Booking**
    - **URL:** `DELETE /bookings/cancel`
    - **Body:**
        ```json
        {
            "email": "amankriet@gmail.com",
            "roomNumber": 2
        }
        ```

- **Modify Booking**
    - **URL:** `PUT /bookings/modify`
    - **Body:**
        ```json
        {
            "email": "amankriet@gmail.com",
            "checkInDate": "2025-01-15",
            "checkOutDate": "2025-01-17"
        }
        ```

## License

This project is licensed under the MIT License.