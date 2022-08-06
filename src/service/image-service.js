import axios from 'axios';

const API_KEY = '563492ad6f917000010000010d16c152561245d2ad4efca41d6cfd2a';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const  getImages =async (query, page) => {
  const {data} =await axios.get(`search?query=${query}&page=${page}`);
  return data
};
