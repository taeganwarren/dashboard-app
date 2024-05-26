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

// GET /submit route
router.get('/submit', (req, res) => {
	res.render('submit');
});

// POST /submit route
router.post('/submit', async (req, res, next) => {
	await createSite(req, res, next);
	res.redirect('/');
});

// PUT /update route
router.put('/update', (req, res) => {
	res.send('Update site');
});

// DELETE /delete route
router.delete('/delete', (req, res) => {
	res.send('Delete site');
});

// Exports
export default router;
