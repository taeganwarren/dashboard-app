// Imports
import express from 'express';
import { getSites, createSite } from '../controllers/siteController.js';

// Constants
const router = express.Router();

// GET / route
router.get('/', async (req, res, next) => {
	const data = await getSites(req, res, next);
	res.render('index', { data: data });
});

// POST /submit route
router.post('/submit', async (req, res, next) => {
	await createSite(req, res, next);
	res.redirect('/');
});

// Exports
export default router;
