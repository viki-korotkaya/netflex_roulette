const baseUrl = 'http://localhost:4000/movies';
const baseFetch = async (url: string, params?: any) => {
  try {
    const response = await fetch(url, params);
    if (!response.ok) {
      throw new Error("HTTP status code: " + response.status)
    }

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

export const getMovies = (queries: { sortBy: string, filter: string }) => {
  const url = getUrlWithQuery(queries);
  return get(url);
}

const getUrlWithQuery = (queries: { sortBy: string, filter: string }) => {
  let urlString = Object.entries(queries).map(([key, value], index) =>{
    if (index === 0 && value ) {
      return `${key}=${value}&sortOrder=asc`
    } else if (value && index !== 0){
      return `${key}=${value}`
    }
    return '';
  }).join('&');
  return urlString.length > 0 ? `${baseUrl}?${urlString}` : baseUrl
}

export const getMovie = (id: number) => {
  return get(`${baseUrl}/${id}`)
}

export const postMovie = (body: any) => {
  const movie = prepareDataForServer(body);
  return post(baseUrl, {
    body: JSON.stringify(movie)
  })
}

export const updateMovie = (body: any) => {
  const movie = prepareDataForServer(body);
  return put(baseUrl, {
    body: JSON.stringify(movie)
  })
}

export const deleteSelectedMovie = (id: number) => {
  return deleteRequest(`${baseUrl}/${id}`, {
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  })
}

function prepareDataForServer(data: any){
 return {
      title: data.title,
      tagline: data.tagline? data.tagline : 'Blabla bla bla blablabla',
      vote_average: data.rating,
      release_date: data.releaseDate,
      poster_path: data.movieUrl,
      overview: data.overview,
      runtime: data.runtime,
      genres: data.genres,
      id: data.id
    }
}
