/**
 * @typedef IdString
 * @type number
 *
 * @typedef LatLng
 * @type object
 * @property {number} latitude
 * @property {number} longitude
 *
 * @typedef NewRequesterData
 * @type object
 * @property {string} name - of user/location
 * @property {string} email
 * @property {string} phone
 * @property {LatLng} latLng
 * @property {string} type - (eg "Hospital")
 * @property {?number} quantity
 *
 * @typedef RequesterFilter
 * @type objects
 * @property {number} range - in KM
 */

import axios from 'axios';
import { endpointBase, defaults } from './config';

/**
 * CREATE new requester
 * @param {NewRequesterData} data
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id}
 */
function createRequester(data) {
  return axios.post(`${endpointBase}/requester`, data);
}

/**
 * FETCH SINGLE requester
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, phone, email, latLng, quantity}
 */
function getRequester(id) {
  return axios.get(`${endpointBase}/requester/${id}`);
}

/**
 * READ ALL requesters
 * @param {number} rangeKm
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, latLng, quantity}[]
 */
function getRequesters(rangeKm = defaults.rangeKm) {
  const params = {
    range: rangeKm,
  };

  return axios.get(`${endpointBase}/requester`, { params });
}

/**
 * UPDATE requester
 * @param {IdString} id
 * @param {NewRequesterData} data
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
function updateRequester(id, data) {
  return axios.patch(`${endpointBase}/requester/${id}`, data);
}

/**
 * DELETE requester
 * @param {IdString} id
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
function deleteRequester(id) {
  return axios.delete(`${endpointBase}/requester/${id}`);
}

export default {
  createRequester,
  getRequester,
  getRequesters,
  updateRequester,
  deleteRequester,
};
