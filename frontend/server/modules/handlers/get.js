const path = require('path');
const getMimeType = require('../mimeTypes.js');
const fileReader = require('../fileReader.js');

function getHandler(req, res) {
    const mainPath = path.join(__dirname, '..', '..', '..');
    const filePath = req.url === '/' ? path.join(mainPath, 'index.html') : path.join(mainPath, req.url);
    const ext = path.extname(filePath);
    const mimeType = getMimeType(ext);
    console.log(filePath)

    try {
        const content = fileReader(filePath);

        res.writeHead(200, {'Content-Type': mimeType});
        res.end(content);
    } catch (error) {
        console.log(error);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found');
    }
}

module.exports = getHandler;