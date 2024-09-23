import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';
import { ContentType } from '../utils/contentType';
import { PodcastTransferModel } from '../models/filterPodcastModel';

const DEFAULT_CONTENT = { 'Content-Type': ContentType.JSON }


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content:PodcastTransferModel = await serviceListEpisodes()
    res.writeHead(content.statusCode, DEFAULT_CONTENT)
    res.write(JSON.stringify(content.body))
    res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)
    res.writeHead(content.statusCode, DEFAULT_CONTENT)
    res.write(JSON.stringify(content.body));
    res.end();
}