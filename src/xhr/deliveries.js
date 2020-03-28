import axios from 'axios';
import { endpointBase } from './config';

/**
 * CREATE a scheduled delivery record
 * @param {IdString} distributorId
 * @param {IdString|IdString[]} supplierIds
 * @param {IdString|IdString[]} requesterIds
 * @param {Date} date
 *
 * response body: {id}
 */
function scheduleDelivery(distributorId, supplierIds, requesterIds, date) {
  return axios.post(`${endpointBase}/delivery`, {
    distributorId,
    supplierIds,
    requesterIds,
    date,
  });
}

/**
 * READ deliveries relevant to a supplier
 * @param {IdString} supplierId
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, supplier: {name, phone}, requester: {name, phone}, quantity, date}[]
 */
function seeDeliveriesForSupplier(supplierId) {
  return axios.get(`${endpointBase}/delivery`, { supplierId });
}

/**
 * READ deliveries relevant to a requester
 * @param {IdString} requesterId
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, supplier: {name, phone}, requester: {name, phone}, quantity, date}[]
 */
function seeDeliveriesForRequester(requesterId) {
  return axios.get(`${endpointBase}/delivery`, { requesterId });
}

/**
 * READ deliveries relevant to a distributor
 * @param {IdString} distributorId
 * @returns {Promise<AxiosResponse<T>>}
 *
 * response body: {id, supplier: {name, phone}, requester: {name, phone}, quantity, date}[]
 */
function seeDeliveriesForDistributor(distributorId) {
  return axios.get(`${endpointBase}/delivery`, { distributorId });
}

/**
 * DELETE a scheduled delivery record
 * @param deliveryId
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
function cancelDelivery(deliveryId) {
  return axios.delete(`${endpointBase}/delivery/${deliveryId}`);
}

/**
 * UPDATE delivery for REQUESTER to acknowledge receipt of delivery
 * @param deliveryId
 * @returns {Promise<AxiosResponse<T>>}
 *
 * no response body expected
 */
function confirmReceipt(deliveryId) {
  return axios.patch(`${endpointBase}/delivery/${deliveryId}`, { received: true });
}

export default {
  scheduleDelivery,
  cancelDelivery,
  confirmReceipt,
  seeDeliveriesForSupplier,
  seeDeliveriesForRequester,
  seeDeliveriesForDistributor,
};
