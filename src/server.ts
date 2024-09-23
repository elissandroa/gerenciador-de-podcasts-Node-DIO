import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcastsController';
import { Routes } from './routes/routes';

const port = process.env.PORT;

const server = http.createServer(
   async (req: http.IncomingMessage, res: http.ServerResponse) => {

        /* QueryString */
        const [baseUrl, queryString] = req.url?.split('?') ?? ["", ""]

        if(req.method === "GET" && baseUrl === Routes.LIST){
           await getListEpisodes(req, res);
        }

        if(req.method === "GET" && baseUrl === Routes.EPISODE){
          await getFilterEpisodes(req, res);
        }
    })



server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})



