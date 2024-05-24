import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_API_KEY;

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
);
export default { getVideos };
