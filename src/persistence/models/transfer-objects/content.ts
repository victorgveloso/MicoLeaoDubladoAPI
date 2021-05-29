import { IMeta } from "../meta"
/**
 * Common properties provided by both movie's and series' magnets attribute on Data Transfer Object
 */
export interface BaseMagnet {
    seeders: number
    title: string
    magnet: string
    size?: number
}
/**
 * Abstract representation of a content (movie or series)
 */
export default interface ContentDTO<T extends BaseMagnet> {
    meta: IMeta
    magnets: T[]
}