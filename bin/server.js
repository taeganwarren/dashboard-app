// Imports
import app from '../app.js';
import connectToDatabase from '../utils/mongodb.js';
import http from 'http';
import debugLib from 'debug';

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
const debug = debugLib('main:server');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
	const normalizedPort = parseInt(val, 10);
	if (isNaN(normalizedPort)) {
		// Named pipe
		return val;
	}
	if (normalizedPort >= 0) {
		// Port number
		return normalizedPort;
	}
	return false;
}

// Event listener for HTTP server "error" event.
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}
	const bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;
	// Handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires elevated privileges');
		process.exit(1);
		break;
	case 'EADDRINUSE':
		console.error(bind + ' is already in use');
		process.exit(1);
		break;
	default:
		throw error;
	}
}

//Event listener for HTTP server "listening" event.
function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}

// Listen on provided port, on all network interfaces.
server.on('error', onError);
server.on('listening', onListening);
connectToDatabase().then(() => {
	server.listen(port);
});