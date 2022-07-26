
import { Movie } from "../models/movie";
import {MovieListResponse} from "../features/movies/moviesSelector";

const baseUrl = 'http://localhost:4000';
const baseFetch = async (url: string, params?: any) => {
  try {
    const response = await fetch(url, params);
    //add conditions
    if (response.statusText === 'No Content' && response.ok){
      return true;
    }
    const data = await response.json();
    return data;
  } catch (e) {
      throw new Error('Something went wrong');
  }
}

export const get = async (url: string, params?: any) => {
  return baseFetch(url, {
    ...params,
    method: 'get'
  })
}

export const post = async (url: string, body: any, params?: any) => {
  return baseFetch(url, {
    ...params,
    ...body,
    method: 'post',
    headers: {
      ...params?.headers,
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
}

export const put = async (url: string, body: any, params?: any) => {
  return baseFetch(url, {
    ...params,
    ...body,
    method: 'put',
    headers: {
      ...params?.headers,
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
}

export const deleteRequest = async (url: string, params?: any) => {
  return baseFetch(url, {
    ...params,
    method: 'delete',
    headers: {
      ...params?.headers,
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
}

export const getMovies = () => {
  return get(`${baseUrl}/movies`)
}

export const getMovie = (id: number) => {
  return baseFetch(`${baseUrl}/movies/${id}`)
}

export const postMovie = (body: any) => {
  const newMovie = prepareDataForServer(body);
  return post(`${baseUrl}/movies`, {
    body: JSON.stringify(newMovie)
  })
}

export const updateMovie = (body: any) => {
  const movie = prepareDataForServer(body);
  return put(`${baseUrl}/movies`, {
    body: JSON.stringify(movie)
  })
}

export const deleteSelectedMovie = (id: number) => {
  return deleteRequest(`${baseUrl}/movies/${id}`, {
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  })
}

function prepareDataForServer(data: any){
  return {
    ...data,
    tagline: 'Bla bla bla',
    vote_count: 6782,
    budget: 30006782,
    revenue: 30006782,
  }
}
