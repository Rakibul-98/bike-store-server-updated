# Bike Solution - Backend

A scalable and secure backend for the Bike Solution e-commerce platform, providing user authentication, order management, payment integration, and seamless data handling.

## Features

- **User Authentication** – Secure registration, login, and session management.
- **Order Management** – Handle order creation, updates, and tracking.
- **Payment Processing** – Integrated with **ShurjoPay** for seamless transactions.
- **Secure API** – Implements authentication using JWT and password encryption with bcrypt.
- **CORS Support** – Configured for secure cross-origin requests.
- **Schema Validation** – Ensuring data integrity using **Zod**.

## Tech Stack

**Backend:** Node.js, Express, MongoDB, Mongoose

**Security & Authentication:** JWT, Bcrypt, Cookie-Parser

**Validation & Data Handling:** Zod, HTTP-Status

**Payment Integration:** ShurjoPay

## Links
[Demo Link](https://bike-solution-client-complete.vercel.app/)
<br>
[Github Link (Client )](https://github.com/Rakibul-98/bike-solution-client-complete-.git)
<br>
[Live Server Link](https://bike-store-server-updated.vercel.app/api/products)

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=<your_server_port>
DATABASE_URL=<your_mongodb_connection_string>
SALT_ROUNDS=<your_salt_rounds>
JWT_ACCESS_SECRET=<your_jwt_access_secret>
JWT_REFRESH_SECRET=<your_jwt_refresh_secret>

SP_ENDPOINT=<shurjopay_endpoint>
SP_USERNAME=<your_sp_username>
SP_PASSWORD=<your_sp_password>
SP_PREFIX=<your_sp_prefix>
SP_RETURN_URL=<your_return_url>
```

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your system.

### Clone the Repository

```bash
git clone https://github.com/Rakibul-98/bike-store-server-updated.git
```

Navigate to the project directory:

```bash
cd bike-store-server-updated
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run start:dev
```

### Build for Production

```bash
npm run build
npm run start:prod
```

## Contact & Support

For issues, feature requests, or contributions, feel free to open an issue or reach out. Let's build something amazing together!
