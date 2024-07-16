import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const BASE_URL = BASE_API_URL + "/api/review";
const reviewService = (content, token, id) => {
  const data = {
    content: content,
    token: token,
    movie_id: id,
  };
  console.log("sssssssssssssss" + data);
  return axios.post(BASE_URL + "/inputReview", data, {
    headers: authHeader(),
  });
};

export { reviewService };
