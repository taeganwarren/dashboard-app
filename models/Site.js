// Imports
import { Schema, model } from 'mongoose';

// Site schema
const SiteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    pinned: {
        type: Boolean,
        default: false
    }
});

// Site model
const Site = model('Site', SiteSchema);

// Exports
export default Site;