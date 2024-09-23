import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcastsController';

const port = process.env.PORT;

const server = http.createServer(
   async (req: http.IncomingMessage, res: http.ServerResponse) => {

        /* QueryString */
        const [baseUrl, queryString] = req.url?.split('?') ?? ["", ""]
        console.log(baseUrl)
        console.log(queryString)


        if(req.method === "GET" && baseUrl === "/api/list"){
           await getListEpisodes(req, res);
        }

        if(req.method === "GET" && baseUrl === "/api/episode"){
          await getFilterEpisodes(req, res);
        }
    })



server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})



