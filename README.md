# JuiceMart Website

## Overview

JuiceMart is an online store designed for the convenience of ordering refreshing juices and soft drinks from the comfort of your home. This platform offers a seamless experience for users to explore a variety of products, manage their accounts, and enjoy the ease of online shopping for their favorite beverages.

![image](https://github.com/raunak-dev-edu/JuiceMart/assets/95216822/0f4af0fe-b680-445b-8020-22cb94da30d2)

 
## Features

### User Account Management
- **Login/Signup:** Securely create an account or log in to an existing one.
- **Update Profile/Password:** Manage and modify user profile information and password securely.
- **Reset Password:** Utilize nodemailer to receive password reset emails for enhanced security.

### Shopping Cart
- **Add/Remove Items:** Easily add or remove items from the shopping cart.
- **Update Quantities:** Adjust product quantities directly within the cart.

### Product Management
- **Products:** Browse a wide range of juices and soft drinks.
- **Product Search:** Find specific products quickly using the search feature.
- **Product Filters:** Filter products based on categories, ratings, and price ranges.

### Order Management
- **Shipping Info:** Conveniently store shipping information in session storage.
- **My Orders:** Access a comprehensive list of orders with various filters.
- **Order Details:** View detailed information about each ordered item.

### Product Reviews
- **Review Products:** Share your feedback on products through user account reviews.

### Admin Dashboard
- **Dashboard Access:** Exclusive access to admin roles.
- **Update Order Status:** Modify the status of orders, ensuring accurate order tracking.
- **Delete Order:** Remove unwanted or canceled orders from the system.
- **Add/Update Products:** Manage the product catalog with the ability to add or update items.
- **Update User Data/Delete User:** Admin-level control over user data, including updates and deletions.
- **List Reviews/Delete Review:** Access and manage product reviews.
- **Stock Management:** Automatically decrease product stock upon shipping.

## Tech Stack

### Frontend
- **ReactJS:** Building responsive user interfaces.
- **React Router:** Enabling seamless navigation within the application.
- **Redux:** Managing the state of the application.
- **Chart.js:** Visualizing data through charts.

### Backend
- **Node.js:** Powering the backend server.
- **Express.js:** Facilitating the creation of robust APIs.
- **MongoDB:** Storing and retrieving data efficiently.
- **JWT (JSON Web Tokens):** Ensuring secure authentication.
- **Nodemailer:** Handling the sending of password reset emails.

## How to Run the Project

1. **Clone the Repo:**
```
git clone https://github.com/raunak-dev-edu/JuiceMart.git
```

2. **Configure Environment Variables:**

Navigate to the 'config' directory and create a config.env file.
Add the following parameters:
```
DB_URI="your mongodb url"
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRES_TIME=5d
COOKIE_EXPIRES_TIME=5
SMTP_SERVICE=gmail
SMTP_EMAIL=
SMTP_PASSWORD=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```
3. **Start the Backend Server:**

```
cd backend
npm start
```
4. **Start the Frontend Server:**

```
cd frontend
npm start
```

**Access the Application:**

Once both the backend and frontend servers are running, open your web browser and go to http://localhost:3000 to access the JuiceMart application.
Now, your app will be running locally on http://localhost:3000. Enjoy shopping with JuiceMart!
