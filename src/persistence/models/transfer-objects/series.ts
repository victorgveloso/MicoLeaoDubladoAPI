import ContentDTO, { BaseMagnet } from "./content";
export interface SeriesMagnet extends BaseMagnet {
    episode: number
    season: number
    fileIdx: number
}
type SeriesDTO = ContentDTO<SeriesMagnet>;
export default SeriesDTO;