import axios from 'axios';
import API_KEY from './apiKey';

async function getTrending() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getTrending;
