import { post } from './index';

/**
 *
 * @param {('consumer'|'distributor'|'producer')} type
 * @param {Consumer|Distributor|Producer} data
 */
export default (type, data) => post(`register/${type}`, data);
