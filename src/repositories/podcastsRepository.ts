import fs, { readFileSync } from 'fs'
import path from 'path'
import { json } from 'stream/consumers';
import { PodcastModel } from '../models/podcastsModel';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (podcastName?:string):Promise<PodcastModel[]> => {
    const language = 'utf-8'
    const rawData = readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)
    if(podcastName) {
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName)
    }
    return jsonFile
}gi