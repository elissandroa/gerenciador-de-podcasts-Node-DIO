import * as http from 'http';

const port = process.env.PORT;

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
})

server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})



