// Imports
import express from 'express';
import { getSites, getSite, createSite, archiveSite, updateSite, deleteSite } from '../controllers/siteController.js';

// Constants
const router = express.Router();

// GET / route
router.get('/', async (req, res, next) => {
	const data = await getSites(req, res, next);
	res.render('index', { data: data });
});

// GET /submit route
router.get('/submit', (req, res) => {
	res.render('submit');
});

// POST /submit route
router.post('/submit', async (req, res, next) => {
	await createSite(req, res, next);
	res.redirect('/');
});

// GET /archive route
router.get('/archive', (req, res) => {
	res.render('archive');
});

// POST /archive route
router.post('/archive', async (req, res, next) => {
	await archiveSite(req, res, next);
	res.redirect('/');
});

// GET /sites route
router.get('/sites', (req, res) => {
	res.render('sites');
});

// GET /update route
router.get('/edit/:id', async (req, res, next) => {
	const data = await getSite(req, res, next);
	res.render('edit', { data: data });
});

// POST /update route
router.post('/edit/:id', async (req, res, next) => {
	await updateSite(req, res, next);
	res.redirect('/');
});

// DELETE /delete route
router.delete('/delete/:id', async (req, res, next) => {
	await deleteSite(req, res, next);
	res.send();
});

// Exports
export default router;
