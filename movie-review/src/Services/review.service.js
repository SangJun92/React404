import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const BASE_URL = BASE_API_URL + "/api/review";
const reviewService = (review) => {
    console.log("sssssssssssssss"+review)
  return axios.post(BASE_URL + "/inputReview", review, { headers: authHeader()});
};

export { reviewService };
