import axios from 'axios';
import API_KEY from './apiKey';

async function getSearchMovies(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getSearchMovies;
