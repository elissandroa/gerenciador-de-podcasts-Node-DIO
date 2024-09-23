import fs, { readFileSync } from 'fs'
import path from 'path'
import { json } from 'stream/consumers';
import { Podcast } from '../models/podcastsModel';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async ():Promise<Podcast[]> => {
    const rawData = readFileSync(pathData, "utf-8")
    const jsonFile = JSON.parse(rawData)
    return jsonFile
}