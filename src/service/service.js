import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf';

export const getStatus = async () => {
  const { data } = await axios.get('/api');

  return data.answer;
};
