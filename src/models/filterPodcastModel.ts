import { PodcastModel } from "./podcastsModel";

export interface PodcastTransferModel {
    statusCode: number;
    body: PodcastModel[];
}