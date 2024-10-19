import axios from "axios";

//Constants
import { BASE_API_URL } from "../constants";

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});
