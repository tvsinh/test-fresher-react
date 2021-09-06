import axiosClient from './axiosClient';
const userApi = {
  login(data) {
    const url = '/oauth2/token';
    return axiosClient.post(url, {
      grant_type: 'client_credentials',
      client_id: data.apiKey,
      client_secret: data.secret,
    });
  },
};

export default userApi;
