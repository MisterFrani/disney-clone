import axios from "axios";
// Dans votre fichier CallApi.tsx

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
);
export default { getVideos };
