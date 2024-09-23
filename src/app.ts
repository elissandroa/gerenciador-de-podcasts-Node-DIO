import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcastsController';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/httpMethos';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    /* QueryString */
    const [baseUrl] = request.url?.split('?') ?? ["", ""]

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}

