import axios, { AxiosInstance, AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

const cache = new Map();
export function request(config: {
  url: string;
  method?: string;
  body?: { [k: string]: FormDataEntryValue };
  headers?: Record<string, string>;
  token?: string;
}) {
  const { url, method = "GET", body, token, headers = {} } = config;

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const id = JSON.stringify(config);
  if (!cache.get(id)) {
    cache.set(
      id,
      instance
        .request({ url: url, method, data: body, headers })
        .then((response: AxiosResponse) => response.data)
    );
  }

  return cache.get(id);
}
