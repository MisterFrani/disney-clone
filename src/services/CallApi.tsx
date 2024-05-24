import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_THE_MOVIE_DB_API;
const apiKey = import.meta.env.VITE_THE_MOVIE_DB_API_KEY;

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
);
export default { getVideos };
