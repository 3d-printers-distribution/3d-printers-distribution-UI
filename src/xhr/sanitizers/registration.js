/**
 * @typedef ContactInfo
 * @type Object
 * @property {string} telephone
 * @property {string} eMail
 *
 * @typedef ConsumerLocationType
 * @param {('HOSPITAL'|'PHARMACY')}
 *
 * @typedef Person
 * @type Object
 * @property {string} name
 * @property {ContactInfo} ContactInformation
 *
 * @typedef Producer
 * @extends Person
 * @property {LatLng} location
 *
 * @typedef Distributor
 * @extends Person
 *
 * @typedef Consumer
 * @extends Person
 * @property {LatLng} location
 * @property {ConsumerLocationType}
 */

/**
 *
 * @param name
 * @param phone
 * @param email
 * @returns {ContactInfo}
 */
function basicInfo(name, phone, email) {
  return {
    name,
    contactInformation: {
      telephone: phone,
      eMail: email,
    },
  };
}

/**
 *
 * @param name
 * @param phone
 * @param email
 * @param location
 * @returns {Producer}
 */
export const producer = (name, phone, email, location) => ({
  ...basicInfo(name, phone, email),
  location,
});

/**
 * @function distributor
 * @param name
 * @param phone
 * @param email
 * @returns {Distributor}
 */
export const distributor = (name, phone, email) => ({
  ...basicInfo(name, phone, email),
});

/**
 * @function consumer
 * @param {string} name
 * @param {string} phone
 * @param {string} email
 * @param {LatLng} location
 * @param {ConsumerLocationType} locationType
 * @returns {Consumer}
 */
export const consumer = (name, phone, email, location, locationType) => ({
  ...basicInfo(name, phone, email),
  location,
  type: locationType,
});
