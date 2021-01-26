import { create as createAxios } from 'axios';

import { BASE_URL } from '../../const';

const axios = createAxios({
  baseURL: BASE_URL,
});

const getRaw = async (url, config) => {
  return axios.get(url, config);
}

const get = async (url, config = {}) => {
  const response = await getRaw(url, config);

  return response.data;
};

// 'delete' is a reserved keyword
const remove = async (url, config) => {
  return axios.delete(url, config);
}

const post = async (url, config) => {
  return axios.post(url, config);
}

const put = async (url, config) => {
  return axios.put(url, config);
}

const api = {
  getRaw,
  get,
  delete: remove,
  post,
  put,
};

export default api;
