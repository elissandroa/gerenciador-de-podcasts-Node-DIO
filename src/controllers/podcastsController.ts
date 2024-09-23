import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';



export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const content = await serviceListEpisodes()
    res.end(content)

}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let queryString = req.url?.split('?p=')[1] ?? ""
    
    const content = await serviceFilterEpisodes(queryString)
    res.end(content);
}