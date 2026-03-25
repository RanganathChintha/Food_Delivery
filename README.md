# Food Delivery App

A full-stack food ordering project with three parts:

- `frontend` - customer-facing React app
- `admin` - admin dashboard to manage food items
- `backend` - Node.js/Express API with MongoDB

This project lets users browse food items, register/login, add items to cart, and place an order flow from the UI. The admin panel is used to add, list, and remove food items.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React, Vite, React Router, Axios |
| Admin | React, Vite, React Router, Axios, React Toastify |
| Backend | Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Multer |
| Payments | Stripe package is installed (order/payment controller incomplete) |

## Project Structure
food_del/
├── admin/ # Admin dashboard React app
├── backend/ # Node.js/Express API server
└── frontend/ # Customer-facing React app

## Features

✅ User registration and login with JWT authentication  
✅ Browse available food items  
✅ Add and remove items from cart  
✅ Store cart data per user  
✅ Upload food images from admin panel  
✅ Add, list, and delete food items from admin dashboard  
✅ Serve uploaded food images from backend  

## Current Status

### ✅ Implemented

- Food CRUD for add/list/remove
- User authentication
- Cart APIs and frontend cart integration
- Customer app pages for home, cart, and place order
- Admin pages for add food, list food, and orders placeholder

## API Endpoints

### Food Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/food/list` | Fetch all food items |
| POST | `/api/food/add` | Add a new food item with image upload |
| POST | `/api/food/remove` | Remove a food item |

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login user |

### Cart Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/remove` | Remove item from cart |
| POST | `/api/cart/get` | Get current user cart |

### Order Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order/place` | Route exists (controller incomplete) |

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <your-repo-url>
cd food_del

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install admin dependencies
cd ../admin
npm install
```

## Environment Variables

Create a .env file inside backend/:

```bash
# env
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
MONGODB_URI=your_mongodb_connection_string
```

## Running the Project

Start all three services in separate terminals.

1️⃣ Start Backend

```bash
cd backend
npm run server
```
Runs on: http://localhost:4000

2️⃣ Start Frontend

```bash
cd frontend
npm run dev
```

3️⃣ Start Admin Panel

```bash
cd admin
npm run dev
```

## Default Local Setup

| Service | URL | Configuration File |
|---------|-----|-------------------|
| Backend API | `http://localhost:4000` | - |
| Frontend | Uses backend URL directly | `frontend/src/context/StoreContext.jsx` |
| Admin | Uses backend URL directly | `admin/src/App.jsx` |

> **Important:** If you change the backend port or deploy the project, update these URLs accordingly.

## Important Notes

- 📁 **Uploaded images** are served from `/images` directory
- 📂 Make sure the `uploads` folder exists inside `backend/`
- 🔧 Some files contain minor naming inconsistencies, but the project structure is clear and workable
- 🚀 There is no root-level script yet to run all apps together

## Future Improvements

- [ ] Add complete order placement logic
- [ ] Integrate Stripe checkout fully
- [ ] Move all secrets and URLs to environment variables
- [ ] Add validation and better error handling
- [ ] Add protected admin authentication
- [ ] Add order history and order tracking
- [ ] Add deployment instructions

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Author

Built as a food delivery full-stack practice project using React, Express, and MongoDB.

---

**Made with ❤️ for learning purposes**


This is the complete README file with all sections properly formatted. You can copy the entire code block above and paste it directly into your `README.md` file. Everything is organized with proper indentation, tables, code blocks, and visual elements to make it look professional and easy to read.
