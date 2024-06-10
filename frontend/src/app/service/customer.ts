import axios, { AxiosResponse } from "axios";

interface Config {
  method: string;
  maxBodyLength: number;
  url: string;
  headers: {
    "X-Has-Accesstoken": string;
  };
}

export const getCustomer = async () => {
  let config: Config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/getEmployee",
    headers: {
      "X-Has-Accesstoken":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.iyS3EfaK9Kqh2JUbp-nx9fh3YqLZHSGJOJBGX9uwc2Q",
    },
  };

  const response: AxiosResponse = await axios.request(config);

  if (response != null) return response.data;
};
