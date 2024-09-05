// Imports
import { Schema, model } from 'mongoose';

// Archive schema
const ArchiveSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Site model
const Archive = model('Archive', ArchiveSchema);

// Exports
export default Archive;