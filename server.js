const hostname = '0.0.0.0';
const port = process.env.PORT; 

console.log(port);

const server = require('./controller.js');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});