import { IMeta } from "../meta"
export interface MovieMagnet {
    title: string
    magnet: string
}
export default interface MovieDTO {
    meta: IMeta
    magnets: MovieMagnet[]
}