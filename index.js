var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./router')(app);
var cluster = require('cluster');
const configReader = require('./config-reader.js');
const config = configReader('./config.json')[process.env.NODE_ENV || 'development'];
var Debug = require('console-debug');
var console = new Debug({
    uncaughtExceptionCatch: false,
    consoleFilter: config.debug? [] : ['LOG', 'WARN', 'DEBUG', 'INFO'],
    colors: true
});

//cluster master
if (cluster.isMaster) {
    const numCPUs = require('os').cpus().length;
    console.info("Starting up cluster with " + numCPUs + "processes");

    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
    }
    cluster.on('online', function(worker) {
        console.info("Worker " + worker.process.pid +  " is online");
    });

    //definimos qué pasa cuando un worker se cae
    cluster.on('exit', function(worker, code, signal) {
        console.error("Worker " + worker.process.pid +" died");
        console.info('Starting new worker...');
        cluster.fork();
    });
} else {
    //cluster workers
    app.listen(config.listenPort, function () {
        console.log('Hotels REST api listening on port ' + config.listenPort);
    });
}