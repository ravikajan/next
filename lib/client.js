import axios from "axios";

const baseURL = "https://goldfish-app-rsufh.ondigitalocean.app";

export const axiosClient = axios.create({
  baseURL,
});
