import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { FilterPodcastModel } from "../models/filterPodcastModel";
import { StatusCode } from "../utils/httpStatusCode";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }
    const queryString = podcastName?.split('?p=')[1] ?? ""
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = (data.length !== 0) ? StatusCode.OK : StatusCode.NoContent 
    responseFormat.body = StatusCode.OK ? data : []
    
    return responseFormat;
}

