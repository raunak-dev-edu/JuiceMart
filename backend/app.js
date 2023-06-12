const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require("cors");
const errorMiddleware = require('./middleware/error.js');

// Setting up config file
if(process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({ path: 'backend/config/config.env' });
}

// middleware
const corsOptions = {
    origin: ["http://localhost:3000","https://juicemart.onrender.com"], // frontend URI (ReactJS)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Import all routes
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoutes');
const payment = require('./routes/paymentRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);

// app.use(express.static(path.join(__dirname, '../frontend/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
// });

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;