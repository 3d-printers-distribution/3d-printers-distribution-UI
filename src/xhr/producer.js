/**
 * @typedef IdString
 * @type string
 *
 * @typedef LatLng
 * @type object
 * @property {number} latitude
 * @property {number} longitude
 *
 * @typedef SupplierFilter
 * @type objects
 * @property {number} range - in KM
 */

import { get, remove, post } from './index';
import { defaults } from './config';

/**
 * FETCH SINGLE supplier
 * @param {IdString} id
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, phone, email, latLng, quantity}
 */
export function getProducer(id) {
  return get(`producer/${id}/stocks`);
}

/**
 * FETCH ALL suppliers
 * @param {LatLng} location
 * @param {number} rangeKm
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, name, latLng, quantity}[]
 */
export function getProducers(location = defaults.location, rangeKm = defaults.rangeKm) {
  const params = {
    ...location,
    distance: rangeKm,
  };

  console.log({ params });

  return get('producer' /* { params } */);
}

export function createStock(productId, amount) {
  return post('stock', { productId, amount });
}

export function removeStock(stockId) {
  return remove(`stock/${stockId}`);
}

export function createProduct(name) {
  return post('product', { name });
}

export function getProducts() {
  return get('product');
}

export function removeProduct(productId) {
  return remove(`product/${productId}`);
}
