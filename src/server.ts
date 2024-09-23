import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcastsController';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/httpMethos';

const port = process.env.PORT;

const server = http.createServer(
   async (request: http.IncomingMessage, response: http.ServerResponse) => {

        /* QueryString */
        const [baseUrl, queryString] = request.url?.split('?') ?? ["", ""]

        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
           await getListEpisodes(request, response);
        }

        if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
          await getFilterEpisodes(request, response);
        }
    })



server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})



