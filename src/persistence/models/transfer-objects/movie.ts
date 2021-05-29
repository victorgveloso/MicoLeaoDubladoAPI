/**
 * This file defines a Data Transfer Object for movies
 */
import ContentDTO, { BaseMagnet } from "./content";
export interface MovieMagnet extends BaseMagnet {}
export type MovieDTO = ContentDTO<MovieMagnet>;
export default MovieDTO;