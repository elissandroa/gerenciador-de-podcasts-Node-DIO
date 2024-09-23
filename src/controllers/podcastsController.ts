import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';
import { StatusCode } from '../utils/httpStatusCode';
import { ContentType } from '../utils/contentType';
import { FilterPodcastModel } from '../models/filterPodcastModel';



export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON })
    const content = await serviceListEpisodes()
    res.end(content)
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url)
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON })
    res.end(JSON.stringify(content.body));
}