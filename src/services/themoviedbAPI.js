import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'ef49ec28e3d8fda2f363dc9fc8d7e63f',
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

export const getMoviesById = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const getMoviesCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
};

export const getMoviesByQuery = async (query = '') => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};
