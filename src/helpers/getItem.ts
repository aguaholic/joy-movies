/* eslint-disable camelcase */
export interface ResponseItem {
  id: string,
  title: string,
  backdrop_path?: string,
  poster_path?: string,
  vote_average: number,
  release_date: string,
  overview: string,
  popularity: number,
  revenue: number,
  vote_count: number
}

export interface Item {
  id: string,
  src: string | null,
  title: string,
  rating: number,
  releaseYear: string,
  overview: string,
  popularity: number,
  revenue: number,
  totalVotes: number
}

export function getItem (item: ResponseItem): Item {
  const src = item.backdrop_path || item.poster_path
  return {
    id: item.id,
    src: src ? 'https://image.tmdb.org/t/p/w500' + src : null,
    title: item.title,
    rating: item.vote_average,
    releaseYear: item.release_date,
    overview: item.overview,
    popularity: item.popularity,
    revenue: item.revenue,
    totalVotes: item.vote_count
  }
}
