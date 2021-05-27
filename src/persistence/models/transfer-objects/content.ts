import { IMeta } from "../meta"

export interface BaseMagnet {
    seeders: number
    title: string
    magnet: string
}

export default interface ContentDTO<T extends BaseMagnet> {
    meta: IMeta
    magnets: T[]
}