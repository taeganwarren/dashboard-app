// Imports
import Site from '../models/Site.js';

// Get all sites
async function getSites(req, res, next) {
    try {
        const sites = await Site.find();
        return sites;
    } catch (err) {
        next(err);
    }
}

// Create a site
async function createSite(req, res, next) {
    try {
        const site = new Site(req.body);
        await site.save();
        return site;
    } catch (err) {
        next(err);
    }
}

// Exports
export {
    getSites,
    createSite
}