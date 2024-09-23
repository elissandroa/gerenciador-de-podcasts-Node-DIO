import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcastsController';

const port = process.env.PORT;

const server = http.createServer(
   async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if(req.method === "GET" && req.url === "/api/list"){
           await getListEpisodes(req, res);
        }

        if(req.method === "GET" && req.url === "/api/episode"){
          await getFilterEpisodes(req, res);
        }
    })



server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})



