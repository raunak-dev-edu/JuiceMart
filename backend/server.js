const app = require('./app');

const dotenv = require('dotenv');
const cloudinary = require('cloudinary');
const connectDatabase = require('./config/database');

// Handle Uncaught Exceptions
process.on('uncaughtException',err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');
    process.exit(1);
})

// Setting up config file
dotenv.config({path : 'backend/config/config.env'});
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const server= app.listen(process.env.PORT,()=>{
    console.log(`Server is starting on http://localhost:${process.env.PORT}`)
});

// Unhandled promise Rejection
process.on('unhandledRejection',(err)=> {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');
    server.close(()=>{
        process.exit(1);
    })
})