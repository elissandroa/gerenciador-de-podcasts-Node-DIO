import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { PodcastTransferModel } from "../models/filterPodcastModel";
import { StatusCode } from "../utils/httpStatusCode";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    const queryString = podcastName?.split('?p=')[1] ?? ""
    const data = await repositoryPodcast(queryString);
    
    let responseFormat: PodcastTransferModel = {
        statusCode: (data.length !== 0) ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    
    
    return responseFormat;
}

