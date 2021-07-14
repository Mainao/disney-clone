import axios from "./axios";

export function fetchResult(url) {
  return axios.get(url);
}