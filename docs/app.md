# Podcast Manager

### Descrição
Um app estilo NetFlix, aonde possa centralizar diferentes episódios de podcasts separados por categorias

### Domínio

Podcastas feitos em vídeo

### Features
- Listar os episódios podcastas em sessões de categorias
 - [Saúde, fbodybuilder, mentalidade, humor ]
 - Filtrar episódios por nome de podcast

#### Feature:
- Listar os episódios podcastas em sessões de 
### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categories
categorias:
```js
[
    {
    podcastName: "Rafinha Bastos",
    episode: "SpaceToday",
    videoId: "BK8mne2__yA",
    cover:"https://i.ytimg.com/vi/BK8mne2__yA/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=BK8mne2__yA",
    categories: ["ciência", "Astronomia"]
},
{
    podcastName: "Flow",
    episode: "RODRIGO SILVA + SÉRGIO SACANI - Flow #199",
    videoId: "YoPSZNa1Pis",
    cover:"https://i.ytimg.com/vi/YoPSZNa1Pis/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=YoPSZNa1Pis",
    categories: ["ciência", "Astronomia"]
}
]
```
