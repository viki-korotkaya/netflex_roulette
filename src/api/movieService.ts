import { get, post, put, deleteRequest } from "api/fetchService";

const baseUrl = "http://localhost:4000/movies";

export const getMovies = (queries: {
  sortBy: string;
  filter: string;
  search: string;
}) => {
  const url = getUrlWithQuery(queries);
  return get(url);
};

const getUrlWithQuery = (queries: {
  sortBy: string;
  filter: string;
  search: string;
}) => {
  if (!queries.sortBy && !queries.filter && !queries.search) {
    return baseUrl;
  }
  let newUrl = `${baseUrl}?`;
  if (queries.search) {
    newUrl += `search=${queries.search}&searchBy=title&`;
  }
  if (queries.sortBy) {
    newUrl += `sortBy=${queries.sortBy}&sortOrder=asc&`;
  }
  if (queries.filter) {
    newUrl += `filter=${queries.filter}`;
  }
  return newUrl;
};

export const getMovie = (id: number) => {
  return get(`${baseUrl}/${id}`);
};

export const postMovie = (body: any) => {
  const movie = prepareDataForServer(body);
  return post(baseUrl, {
    body: JSON.stringify(movie),
  });
};

export const updateMovie = (body: any) => {
  const movie = prepareDataForServer(body);
  return put(baseUrl, {
    body: JSON.stringify(movie),
  });
};

export const deleteSelectedMovie = (id: number) => {
  return deleteRequest(`${baseUrl}/${id}`, {
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
};

function prepareDataForServer(data: any) {
  return {
    title: data.title,
    tagline: data.tagline ? data.tagline : "Blabla bla bla blablabla",
    vote_average: data.rating,
    release_date: data.releaseDate,
    poster_path: data.movieUrl,
    overview: data.overview,
    runtime: data.runtime,
    genres: data.genres,
    id: data.id,
  };
}
