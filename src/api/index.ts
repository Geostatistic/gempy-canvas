// src/api/index.ts
/* axios configuration */

import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  responseType: "json"
});
