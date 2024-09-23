import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';
import { StatusCode } from '../utils/httpStatusCode';
import { ContentType } from '../utils/contentType';



export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON })
    const content = await serviceListEpisodes()
    res.end(content)
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON })
    const content = await serviceFilterEpisodes(req.url)
    res.end(content);
}