// Imports
import { Schema, model } from 'mongoose';

// Site schema
const SiteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Site model
const Site = model('Site', SiteSchema);

// Exports
export default Site;