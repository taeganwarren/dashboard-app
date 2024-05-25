// Imports
import mongoose from 'mongoose';
import debugLib from 'debug';

// Constants
const debug = debugLib('main:database');
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

// Connect to MongoDB
function connectToDatabase() {
    return mongoose.connect(MONGO_CONNECTION_STRING)
        .then(() => {
            debug('Connected to MongoDB');
        });
}

// Exports
export default connectToDatabase;