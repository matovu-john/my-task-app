const getHandler = require('./handlers/get.js');

function router(req) {
    if (req.method === 'GET') {
        return getHandler;
    }
}

module.exports = router;