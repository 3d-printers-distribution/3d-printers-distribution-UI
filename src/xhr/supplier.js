/**
 * @typedef IdString
 * @type number
 *
 * @typedef LatLng
 * @type object
 * @property {number} latitude
 * @property {number} longitude
 *
 * @typedef NewSupplierData
 * @type object
 * @property {string} name - of user/location
 * @property {string} email
 * @property {string} phone
 * @property {LatLng} latLng
 * @property {string} printerSetup
 * @property {?number} quantity
 *
 * @typedef SupplierFilter
 * @type objects
 * @property {number} range - in KM
 */

import axios from 'axios';
import { endpointBase, defaults } from './config';

/**
 * CREATE new supplier
 * @param {NewSupplierData} data
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id}
 */
function createSupplier(data) {
  return axios.post(`${endpointBase}/supplier`, data);
}

/**
 * FETCH SINGLE supplier
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, phone, email, latLng, quantity}
 */
function getSupplier(id) {
  return axios.get(`${endpointBase}/supplier/${id}`);
}

/**
 * READ ALL suppliers
 * @param {number} rangeKm
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, latLng, quantity}[]
 */
function getSuppliers(rangeKm = defaults.rangeKm) {
  const params = {
    range: rangeKm,
  };

  return axios.get(`${endpointBase}/supplier`, { params });
}

/**
 * UPDATE supplier
 * @param {IdString} id
 * @param {NewSupplierData} data
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
function updateSupplier(id, data) {
  return axios.patch(`${endpointBase}/supplier/${id}`, data);
}

/**
 * DELETE supplier
 * @param {IdString} id
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
function deleteSupplier(id) {
  return axios.delete(`${endpointBase}/supplier/${id}`);
}

export default {
  createSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
  deleteSupplier,
};
