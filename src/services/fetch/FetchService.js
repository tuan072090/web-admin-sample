import {API_URI} from "../../configs";

const axios = require('axios');

export function MyError(data) {
  if (typeof data === "undefined") {
    this.message = "Unknown error";
    this.code = 3001;
    this.status = 504
  } else {
    this.code = data['code'] != null ? data['code'] : 3001;
    this.status = data["status"] != null ? data["status"] : 504;
    this.errors = data["errors"] != null ? data["errors"]: [];

    if (this.errors.length > 0) {
      this.message = this.errors[0].field + " " + this.errors[0].message;
    }

    this.message = data.message || "Unknown error";
  }
}

class FetchData {
  axiosInstance = {};

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URI,
      timeout: 10000, //  10s
      headers: {
        "x-meete-client-type": "Web",
        "x-meete-client-version": 2
      }
    });
  }

  get(route, params = {}) {
    return this.axiosInstance.get(route, {params}).then(this.handleData).catch(this.handleError);
  }

  put(route, params = {}) {
    return this.axiosInstance.put(route, {params}, "PUT").then(this.handleData).catch(this.handleError);
  }

  post(route, params = {}) {
    return this.axiosInstance.post(route, {params}, "POST").then(this.handleData).catch(this.handleError);
  }

  handleData = function (res) {
    return res.data;
  }

  handleError = function (error) {
    const errorData = {message: "unknown", status: 500, code: 500, errors:[]}

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);

      errorData["status"] = error.response.status
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("no error response", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      errorData["message"] = error.message
    }

    throw new MyError(errorData)
  }
}

export default FetchData
