const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_URI, {
    }).then((data) => {
        console.log(`MongoDB Database connected with HOST: ${data.connection.host}`)
    });
}

module.exports = connectDatabase;