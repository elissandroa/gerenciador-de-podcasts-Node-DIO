import fs, { readFileSync } from 'fs'
import path from 'path'
import { json } from 'stream/consumers';
import { PodcastModel } from '../models/podcastsModel';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (podcastName?:string):Promise<PodcastModel[]> => {
    const rawData = readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData)
    if(podcastName) {
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName)
    }
    return jsonFile
}