import { IMeta } from "./meta";

export interface IMagnet {
    title: string
    magnet: string
}

export interface IMovie {
    meta: IMeta
    magnets: IMagnet[]
}