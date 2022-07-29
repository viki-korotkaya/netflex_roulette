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
