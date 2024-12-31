import axios from "axios";

//Constants
import { BASE_API_URL } from "../constants";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || BASE_API_URL,
});
