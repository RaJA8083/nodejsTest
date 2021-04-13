/* eslint-disable no-console */
import mongoose from 'mongoose';

// database uri
const DB_URI = 'mongodb+srv://chatApp:chat123@meetupme-5nald.mongodb.net/zoogol-test?retryWrites=true&w=majority';

const createConnect = async () => {
    mongoose.Promise = global.Promise;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose.connect(DB_URI, options);
    mongoose.connection
        .once('open', () => console.log('MongoDb running'))
        .on('error', err => console.log(err));
    mongoose.set('debug', true);
};
module.exports = { createConnect };
