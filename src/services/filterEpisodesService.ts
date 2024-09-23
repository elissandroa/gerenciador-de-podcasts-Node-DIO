import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcastsRepository";

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {


    let queryString = podcastName?.split('?p=')[1] ?? ""

    const data = await repositoryPodcast(queryString);



    return JSON.stringify(data);
}

