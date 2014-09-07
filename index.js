/*
 * index.js
 * Main Application page
 * @author: Anthony Garza 
 * Trying out Node.js for the first time
 */

var server = require('./simpleserver.js');
var router = require('./router');
server.start(router.route);