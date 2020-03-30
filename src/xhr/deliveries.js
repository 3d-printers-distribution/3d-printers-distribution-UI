import { get, remove, post, patch } from './index';

/**
 * CREATE a delivery allocation
 * @param {IdString} stockId
 * @param {IdString} demandId
 * @param {number} amount
 *
 * response body: {id}
 */
export function scheduleDelivery(stockId, demandId, amount) {
  return post('allocation', {
    stockId,
    demandId,
    amount,
  });
}

export function getDelivery(id) {
  return get(`allocation/${id}`);
}

export function updateDelivery(id, data) {
  return patch(`allocation/${id}`, data);
}

/**
 * DELETE a scheduled delivery record
 * @param deliveryId
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
export function cancelDelivery(deliveryId) {
  return remove(`/allocation/${deliveryId}`);
}
