// Imports
import express from 'express';

// Constants
const router = express.Router();

// GET / route
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' });
});

// Exports
export default router;
