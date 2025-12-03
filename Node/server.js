import http from 'http'
import { sum, pow } from './logic.js';

const PORT = 9000;


const server = http.createServer((req, res) => {
    res.end("Hello form server");
})


const add = sum(3, 4);
console.log(add);

server.listen(PORT, () => {
    console.log("Server is running")
})