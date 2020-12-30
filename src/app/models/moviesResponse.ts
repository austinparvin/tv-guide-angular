import { IMovie } from "./movie";

export interface IMoviesResponse {
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
