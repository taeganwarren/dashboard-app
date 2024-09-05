// Imports
import Site from '../models/Site.js';
import Archive from '../models/Archive.js';

// Get all sites
async function getSites(req, res, next) {
    try {
        const sites = await Site.find();
        return sites;
    } catch (err) {
        next(err);
    }
}

// Get all archives
async function getArchives(req, res, next) {
    try {
        const archives = await Archive.find();
        console.log('test');
        console.log(archives);
        return archives;
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

// Archive a site
async function archiveSite(req, res, next) {
    try {
        const archive = new Archive(req.body);
        await archive.save();
        return archive;
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
    getArchives,
    getSite,
    createSite,
    archiveSite,
    updateSite,
    deleteSite
}