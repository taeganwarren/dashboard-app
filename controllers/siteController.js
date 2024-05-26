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

// Get a site
async function getSite(req, res, next) {
    try {
        const site = await Site.findById(req.params.id);
        return site;
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

// Update a site
async function updateSite(req, res, next) {
    try {
        const site = await Site.findByIdAndUpdate(req.params.id);
        site.set(req.body);
        await site.save();
        return site;
    }
    catch (err) {
        next(err);
    }
}

// Delete a site
async function deleteSite(req, res, next) {
    try {
        await Site.findByIdAndDelete(req.params.id);
    } catch (err) {
        next(err);
    }
}

// Exports
export {
    getSites,
    getSite,
    createSite,
    updateSite,
    deleteSite
}