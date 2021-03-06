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

import { get, remove, post } from './index';
import { defaults } from './config';

/**
 * FETCH SINGLE consumer
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, phone, email, latLng, quantity}
 */
export function getConsumer(id) {
  return get(`consumer/${id}/demands`);
}

/**
 * READ ALL requesters
 * @param {LatLng} location
 * @param {number} rangeKm
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, latLng, quantity}[]
 */
export function getConsumers(location = defaults.location, rangeKm = defaults.rangeKm) {
  const params = {
    location,
    distance: rangeKm,
  };

  if (params) {
    // do nothing (bypassing errors while BE is fixed)
  }

  return get('consumer' /* { params } */);
}

export function createDemand(productId, amount) {
  return post('demand', { productId, amount });
}

export function removeDemand(demandId) {
  return remove(`demand/${demandId}`);
}
