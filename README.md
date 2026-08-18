#  Savora

### A Full-Stack Food Ordering & Management Platform

Savora is a full-stack food ordering web application built to provide a complete online ordering experience, from browsing food items and managing a cart to placing orders and completing payments.

The project follows a **decoupled frontend/backend architecture**, with a React-based frontend communicating with a REST API built with Node.js and Express. MongoDB is used for persistent data storage, while external services handle image delivery and online payments.

---

## Live Application

> **Live Demo:** https://savora-orpin.vercel.app/

---

## Screenshots

### Home Page
<img width="1920" height="1080" alt="Screenshot (2172)" src="https://github.com/user-attachments/assets/2a516034-1081-4222-8e9b-900de4d4592e" />



### Food / Menu Section
<img width="1920" height="1080" alt="Screenshot (2174)" src="https://github.com/user-attachments/assets/cb5c3c44-1d24-42f7-a60b-e1789098010c" />



### Shopping Cart
<img width="1920" height="1080" alt="Screenshot (2178)" src="https://github.com/user-attachments/assets/32438ad9-33a7-46e1-b773-79293d285a26" />



### Order Placement
<img width="1920" height="1080" alt="Screenshot (2179)" src="https://github.com/user-attachments/assets/704d3666-036e-4391-8d43-0f979902a2cc" />


### Payment / Checkout
<img width="1920" height="1080" alt="Screenshot (2180)" src="https://github.com/user-attachments/assets/18299ecd-7b0e-4388-9581-f1d43352a906" />


###  My Orders
<img width="1920" height="1080" alt="Screenshot (2177)" src="https://github.com/user-attachments/assets/010de877-2f4d-4ac8-8cc0-2005ff147285" />


### Admin Dashboard
<img width="1920" height="1080" alt="Screenshot (2183)" src="https://github.com/user-attachments/assets/42d216a1-e254-4186-9e0a-d71108b80a07" />
<img width="1920" height="1080" alt="Screenshot (2182)" src="https://github.com/user-attachments/assets/f48c3483-1162-46bb-8ea7-4cdca17ac6fc" />
<img width="1920" height="1080" alt="Screenshot (2181)" src="https://github.com/user-attachments/assets/00a12169-36e1-49b0-b6d4-3c7adecd6169" />




---

##  About the Project

Savora was developed as a practical full-stack application to explore how modern food ordering platforms are structured and how different parts of a web application communicate with each other.

The application includes separate experiences for **customers and administrators**.

### Customer Side

Users can:

* Browse available food items
* View food details
* Add items to their cart
* Increase or decrease item quantities
* Place orders
* Complete online payments
* Verify payment status
* View their previous orders

### Admin Side

Administrators can:

* Add food items
* Upload food images
* Manage food listings
* View orders
* Manage order-related information

The application uses protected routes and authentication to control access to user and administrator functionality.

---

##  Key Features

###  Authentication & Authorization

* User registration
* User login
* Password hashing with bcrypt
* JWT-based authentication
* Protected API routes
* Admin authorization
* Separate customer and admin experiences

###  Food Management

* Add food items
* Food name and description
* Food pricing
* Food categorization
* Food image uploads
* Image optimization through ImageKit
* Food data stored in MongoDB

###  Shopping Cart

* Add food items to cart
* Increase item quantity
* Decrease item quantity
* Remove items when quantity reaches zero
* Retrieve current cart information
* Cart associated with authenticated users

###  Order Management

* Create orders
* Store order information
* Store ordered items
* Store delivery address
* Track order/payment state
* View previous orders
* Admin order management

### Online Payments

Savora integrates **Stripe Checkout** for online payments.

The backend creates Stripe Checkout sessions from the selected order items and redirects users to the appropriate success or cancellation flow.

### Image Management

Food images are uploaded through the backend using `multer` and stored using **ImageKit**.

Images are also transformed for optimized delivery, including WebP formatting and automatic quality optimization.

###  User Feedback

The frontend uses toast notifications to provide feedback for user actions and application events.

---

##  Technology Stack

### Frontend

* React
* React Router
* Vite
* Axios
* React Hot Toast
* React Toastify
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Cookie Parser
* CORS
* Multer
* dotenv

### External Services

* **Stripe** — online payments
* **ImageKit** — image storage and optimization
* **Vercel** — deployment

---

##  Application Architecture

Savora follows a separated frontend/backend architecture:

```text
                         ┌─────────────────────┐
                         │      User / Admin   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    React Frontend   │
                         │       + Vite        │
                         └──────────┬──────────┘
                                    │
                               HTTP / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │      Node.js        │
                         └──────────┬──────────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
      ┌─────────────┐       ┌─────────────┐       ┌──────────────┐
      │   MongoDB   │       │  ImageKit   │       │    Stripe    │
      │   Database  │       │    Images   │       │   Payments   │
      └─────────────┘       └─────────────┘       └──────────────┘
```

---

##  Project Structure

```text
Savora/
│
├── backend/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── imageKit.js
│   │
│   ├── controllers/
│   │   ├── cart.controller.js
│   │   ├── food.controller.js
│   │   ├── order.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── food.model.js
│   │   ├── order.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── cart.routes.js
│   │   ├── food.routes.js
│   │   ├── order.routes.js
│   │   └── user.routes.js
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── docs/
│   └── screenshots/
│
└── README.md
```

---

##  Authentication Flow

Savora uses JWT-based authentication.

```text
User
 │
 ├── Register
 │      ↓
 │   Password hashed with bcrypt
 │      ↓
 │   User stored in MongoDB
 │      ↓
 │   JWT generated
 │
 └── Login
        ↓
     Credentials verified
        ↓
     JWT generated
        ↓
     Authenticated requests
        ↓
     Protected backend routes
```

Passwords are hashed before being stored, and authenticated requests are protected using middleware.

---

##  Cart Flow

```text
User selects food
        ↓
Add to Cart
        ↓
Backend identifies authenticated user
        ↓
Food item verified
        ↓
Cart updated
        ↓
MongoDB stores cart information
        ↓
Updated cart returned to frontend
```

The cart supports increasing and decreasing quantities and removes an item when its quantity reaches zero.

---

##  Order Flow

```text
User
  ↓
Adds food to cart
  ↓
Reviews cart
  ↓
Enters delivery information
  ↓
Places order
  ↓
Backend creates order
  ↓
Stripe Checkout Session
  ↓
Payment
  ↓
Payment verification
  ↓
Order status updated
  ↓
Order appears in My Orders
```

---

##  Payment Flow

Savora uses Stripe Checkout for online payments.

The backend:

1. Receives the order information.
2. Creates an order record.
3. Converts order items into Stripe line items.
4. Creates a Stripe Checkout session.
5. Returns the checkout session URL.
6. Redirects the user to Stripe.
7. Handles the success/cancellation flow.
8. Verifies the order payment state.

---

##  Image Upload Flow

Food images are uploaded through the backend.

```text
Admin selects image
        ↓
Frontend sends multipart/form-data
        ↓
Multer processes upload
        ↓
Backend reads image
        ↓
ImageKit upload
        ↓
Image optimization
        ↓
Optimized image URL stored
        ↓
MongoDB food document
```

Savora uses ImageKit transformations to optimize uploaded food images for web delivery.

---

##  API Structure

The backend is organized into four main API modules:

| Module   | Base Route   | Responsibility                       |
| -------- | ------------ | ------------------------------------ |
|  User  | `/api/user`  | Registration, login, user operations |
|  Food  | `/api/food`  | Food item management                 |
|  Cart  | `/api/cart`  | Cart operations                      |
|  Order | `/api/order` | Orders and payments                  |

### User API

```text
/api/user
```

Responsible for authentication and user-related operations.

### Food API

```text
/api/food
```

Responsible for food item creation and retrieval.

### Cart API

```text
/api/cart
```

Responsible for adding, removing, and retrieving cart items.

### Order API

```text
/api/order
```

Responsible for order creation, payment processing, verification, and order management.

> For the complete endpoint documentation, add the exact endpoints and request/response examples here as the API evolves.

---

##  Environment Variables

### Backend

Create a `.env` file inside the `backend` directory.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET=your_stripe_secret_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Frontend

Create a `.env` file inside the `frontend` directory using the environment variable required by your frontend API configuration.

```env
VITE_API_URL=your_backend_api_url
```

> Never commit real credentials, private keys, database connection strings, or payment secrets to GitHub.

---

## 🚀 Getting Started

Follow these steps to run Savora locally.

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd Savora
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Configure Backend Environment Variables

Create:

```text
backend/.env
```

and add the required environment variables.

---

### 4. Start the Backend

For development:

```bash
npm run server
```

For normal startup:

```bash
npm start
```

The backend runs on:

```text
http://localhost:3000
```

unless another port is configured through `PORT`.

---

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

### 6. Configure Frontend Environment Variables

Create:

```text
frontend/.env
```

and configure the backend API URL.

Example:

```env
VITE_API_URL=http://localhost:3000
```

---

### 7. Start the Frontend

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---


##  Testing

Testing is an area planned for continued development.

Future testing coverage can include:

* Authentication
* Protected routes
* Food API
* Cart operations
* Order creation
* Payment verification
* Admin authorization

---

##  Security Considerations

Savora includes several security-related mechanisms:

* Password hashing with bcrypt
* JWT authentication
* Protected API routes
* Admin route protection
* Environment-based configuration
* CORS configuration
* Server-side payment processing

Security will continue to be improved as the application evolves.


##  Deployment

Savora is structured for independent frontend and backend deployment.

### Frontend

The React/Vite frontend can be deployed as a static application.

### Backend

The Node.js/Express backend is configured for deployment using Vercel.

### Database

MongoDB provides persistent application data storage.

### External Services

* ImageKit handles food image storage and optimization.
* Stripe handles online payment checkout.

---

##  What I Learned

Building Savora helped strengthen my understanding of full-stack application development, including:

* Designing a frontend/backend architecture
* Building REST APIs with Express
* Working with MongoDB and Mongoose
* Implementing authentication with JWT
* Hashing passwords securely
* Protecting routes with middleware
* Managing user carts
* Designing order workflows
* Integrating Stripe payments
* Handling image uploads
* Working with external APIs/services
* Deploying a full-stack application
* Managing environment variables
* Connecting frontend and backend applications

---

##  Project Highlights

| Area             | Implementation                   |
| ---------------- | -------------------------------- |
| Frontend         | React + Vite                     |
| Backend          | Node.js + Express                |
| Database         | MongoDB + Mongoose               |
| Authentication   | JWT + bcrypt                     |
| Payments         | Stripe Checkout                  |
| Image Management | ImageKit                         |
| HTTP Client      | Axios                            |
| Routing          | React Router                     |
| Notifications    | React Hot Toast / React Toastify |
| Deployment       | Vercel                           |
| Architecture     | Decoupled Frontend + REST API    |

---

##  Project Goals

The primary goals of Savora are to:

* Build a complete full-stack application.
* Understand frontend/backend communication.
* Practice REST API development.
* Work with a NoSQL database.
* Implement authentication and authorization.
* Integrate third-party services.
* Handle real-world ordering and payment workflows.
* Deploy a working application.
* Improve software engineering and application architecture skills.

---


##  Author

### Sadaf Javed

Software Engineering Student | MERN Developer | Python & Automation Enthusiast

* GitHub: [Sadafhssc](../)
* LinkedIn: https://www.linkedin.com/in/sadaf-javed/
