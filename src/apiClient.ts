import fetch from "node-fetch";

import { apiUrl } from "./const";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function fetchHome() {
  const apiRes = await fetch(apiUrl + "/home", defaultOptions);
  const data = await apiRes.json();
  return data;
}
