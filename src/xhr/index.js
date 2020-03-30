/**
 * @typedef {number} IdString
 */

/**
 * @typedef LatLng
 * @type object
 * @property {number} latitude
 * @property {number} longitude
 */

import axios from 'axios';
import store from '../store/index';
import { apiBaseUrl } from './config';

axios.defaults.baseURL = apiBaseUrl;
axios.defaults.headers.common.Authorization = store.state.userToken;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const post = (endpoint, content) => {
  console.log(axios.post(`${apiBaseUrl}/${endpoint}`, content));
};

export const get = (endpoint, content) => axios.get(`${apiBaseUrl}/${endpoint}`, content);
