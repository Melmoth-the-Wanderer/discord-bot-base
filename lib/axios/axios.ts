import {AxiosError} from 'axios';

export class AxiosUtils {
  public static getErrorMessage(error: AxiosError): string {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return `AXIOS ERROR ${error.code} | ${error.message}`;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return `AXIOS ERROR | ${error.message}`;
    } else {
      // Something happened in setting up the request that triggered an Error
      return `AXIOS ERROR | ${error.message}`;
    }
  }
}
