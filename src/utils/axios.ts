import axios from "axios";

export const fetcherGet = async (url: string) => {
  return axios.get(url).then((values) => values.data);
};

export const fetcherPost = async (url: string, data: any) => {
  return axios.post(url, data).then((values) => values.data);
};
