import { PodcastModel } from "./podcastsModel";

export interface FilterPodcastModel {
    statusCode: number;
    body: PodcastModel[];
}