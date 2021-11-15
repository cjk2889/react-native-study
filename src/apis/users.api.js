import httpClient from '../utils/http';

/**
 *
 */
export async function getUsers() {
  return httpClient.get('/users').then(r => r.data);
}

const usersAPI = {
  getUsers,
};

export default usersAPI;
