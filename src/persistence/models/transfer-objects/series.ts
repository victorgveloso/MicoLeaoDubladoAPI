import { IMeta } from "../meta"
export interface SeriesMagnet {
    title: string
    magnet: string
    episode: number
    season: number
}
export default interface SeriesDTO {
    meta: IMeta
    magnets: SeriesMagnet[]
}