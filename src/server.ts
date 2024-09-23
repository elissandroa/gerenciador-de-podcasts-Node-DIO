import * as http from 'http';
import { app } from './app';

const port = process.env.PORT;

const server = http.createServer(app)



server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})



