import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const post = async <RequestBody, Response>(
  url: string,
  body: RequestBody,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<Response>> => {
  return axios.post(url, body, config);
};

const get = async <Response>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<Response>> => {
  return axios.get(url, config);
};

const put = async <RequestBody, Response>(
  url: string,
  body: RequestBody,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<Response>> => {
  return axios.put(url, body, config);
};

const _delete = async <RequestBody, Response>(
  url: string,
  body: RequestBody,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<Response>> => {
  return axios.delete(url, config);
};

export const Axios = {
  post,
  put,
  get,
  delete: _delete
};
