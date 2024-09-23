import { PodcastTransferModel } from "../models/filterPodcastModel";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/httpStatusCode";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    const data = await repositoryPodcast();

    let responseFormat: PodcastTransferModel = {
        statusCode: (data.length !== 0) ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }
    return responseFormat;

}