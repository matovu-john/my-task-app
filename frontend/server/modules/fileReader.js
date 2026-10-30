const fs = require('fs');

function fileReader(filePath) {
    try {
        const content = fs.readFileSync(filePath);
        return content;
    } catch (error) {
        throw error;
    }
}

module.exports = fileReader;