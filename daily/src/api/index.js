import axios from 'axios';
axios.defaults.baseURL='https://www.fastmock.site'
export const GET = (url, params) => {
  return axios.get(`${url}`, {params: params}).then(res => res.data)  
}

