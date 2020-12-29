let node = false;
try {
    node = (Object.prototype.toString.call(global.process) === '[object process]');
}
catch (e) {
}

module.exports = node ? require('./dist/node') : require('./dist/web');
// module.exports = require('./dist/web');
