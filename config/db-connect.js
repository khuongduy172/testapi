const mongoose = require('mongoose');


function connect() {
    const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true };
    // const dbName = process.env.DB_NAME || 'myapis';
    // const dbHost = process.env.DB_HOST || 'localhost';
    // const dbPort = process.env.DB_PORT || 27017;

    mongoose.connect(`mongodb://localhost:27017/testapi`, mongooseOptions, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Ket Noi Thanh Cong Toi Database !');
        }
    });
}

module.exports.connect = connect;