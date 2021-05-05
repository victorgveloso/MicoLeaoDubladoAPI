export class MovieMeta {
    id: string
    type: string
    name?:  string
    genres?: string[]
    poster?: string
    backgorund?: string
    logo?: string
    description?: string
    releaseInfo: string
    imdbRating: number
    runtime: string
    catalogs: string[]

    constructor(releaseInfo: string, imdbRating: number, runtime: string, catalogs: string[], id: string, type: string) {
        this.releaseInfo = releaseInfo;
        this.imdbRating = imdbRating;
        this.runtime = runtime;
        this.catalogs = catalogs;
        this.id = id;
        this.type = type;
    }

}
export class MovieMagnet {
    title: string
    magnet: string

    constructor(title: string, magnet: string) {
        this.title = title;
        this.magnet = magnet;
    }
}
export default class Movie {
    meta: MovieMeta
    magnets: MovieMagnet[]

    constructor(meta: MovieMeta, magnets: MovieMagnet[]) {
        this.magnets = magnets;
        this.meta = meta;
    }
}