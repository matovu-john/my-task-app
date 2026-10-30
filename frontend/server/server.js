const http = require('http');
const router = require('./modules/router.js');

const server = http.createServer((req, res) => {
    const handler = router(req);
    handler(req, res);
});

server.listen(3000, ()=>{
    console.log('server listening at port 3000')
});