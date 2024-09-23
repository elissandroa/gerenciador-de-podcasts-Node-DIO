export const serviceListEpisodes = async () => {
    const data = [
        {
            podcastName: "Rafinha Bastos",
            episode: "SpaceToday",
            videoId: "BK8mne2__yA",
            categories: ["ciência", "Astronomia"]
        },
        {
            podcastName: "Flow",
            episode: "RODRIGO SILVA + SÉRGIO SACANI - Flow #199",
            videoId: "YoPSZNa1Pis",
            categories: ["ciência", "Astronomia"]
        }
    ]

    return JSON.stringify(data);
}

