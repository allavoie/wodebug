var http = require('http');
var debug = require('debug')('untitled:server');


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var portCount = 0;
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    console.log("The number of times port has passed here is " + ++portCount + "and the value is: " + port);

    // handle specific listen errors with friendly messages
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

module.exports = function(app, port) {
    /**
     * Get port from environment and store in Express.
     */

    var normalizedPort = normalizePort(process.env.PORT || port);
    app.set('port', normalizedPort);

    /**
     * Create HTTP server.
     */
    var server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(normalizedPort);
    server.on('error', onError);
    server.on('listening', onListening);

    /**
     * Event listener for HTTP server "listening" event.
     */

    function onListening() {
        var addr = server.address();
        var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }

    return server;
}
