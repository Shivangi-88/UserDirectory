import axios from 'axios';

export const fetchUsers = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
