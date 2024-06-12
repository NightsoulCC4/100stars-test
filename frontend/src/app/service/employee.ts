import axios, { AxiosResponse } from "axios";

interface Config {
  method: string;
  maxBodyLength: number;
  url: string;
  headers?: {
    "Content-Type": string;
  };
  data?: { id: string | undefined };
}

export const getEmployee = async () => {
  let config: Config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/getEmployee",
  };

  const response: AxiosResponse = await axios.request(config);

  if (response != null) return response.data;
};

export const deleteEmployee = async (data: { id: string | undefined }) => {
  let config: Config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/deleteEmployee",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const response: AxiosResponse = await axios.request(config);

  if (response != null) return response.status;
};
