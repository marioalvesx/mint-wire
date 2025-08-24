import axios from "axios";

export const api = axios.create({
  baseURL: "https://mint-wire.vercel.app/api",
});
