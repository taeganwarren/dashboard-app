// Imports
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import url from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//import helmet from "helmet";
import indexRouter from './routes/routes.js';

// Constants
const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// Render the error page
	res.status(err.status || 500);
	res.render('error');
});

// Exports
export default app;
