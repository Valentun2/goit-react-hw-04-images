import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38973811-65af30dfa760d39e422e4d431';

export const getPhoto = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&page=${page}&per_page=12`
  );
  return response.data;
};
