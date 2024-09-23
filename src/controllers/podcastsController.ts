import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';
import { StatusCode } from '../utils/httpStatusCode';
import { ContentType } from '../utils/contentType';
import { PodcastTransferModel } from '../models/filterPodcastModel';



export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content:PodcastTransferModel = await serviceListEpisodes()
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON })
    res.write(JSON.stringify(content.body))
    res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON })
    res.write(JSON.stringify(content.body));
    res.end();
}