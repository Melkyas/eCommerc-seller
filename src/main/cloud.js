

import axios from "axios";

export class Cloud {
  static headers;

  static post = async (url, data) => {
    var response = await axios.post(url, data, Cloud.headers);
    return response.data;
  };

  static get = async (url) => {
    var response = await axios.get(url, Cloud.headers);
    return response.data;
  };

  static setToken = (token) => {
    Cloud.headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  };
}
