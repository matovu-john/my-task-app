function getMimeType(ext) {
    let mimeType;

    switch (ext) {
        case '.html':
            mimeType = 'text/html';
            break;

        case '.css':
            mimeType = 'text/css';
            break;

        case '.js':
            mimeType = 'text/javascript';
            break;
    }
    return mimeType;
}

module.exports = getMimeType;