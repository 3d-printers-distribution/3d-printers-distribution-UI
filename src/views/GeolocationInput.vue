<template>
  <v-row no-gutters class="align-center py-2">
    <v-btn
      color="primary"
      :loading="loading"
      @click="fetchLocation"
    >
      <v-icon>mdi-crosshairs-gps</v-icon>
    </v-btn>
    <span class="body-1 ml-4" v-text="locationLabel"></span>
  </v-row>
</template>

<script>
import axios from 'axios';

/**
 * Use the Browser Geolocation API to fetch the users location
 * @returns {Promise<GeolocationPosition>}
 */
function getGeolocation() {
  return new Promise(((resolve, reject) => {
    if (!navigator) reject(new Error('Geolocation is unsupported'));
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }));
}

/**
 * Format the Response from geocode.xyz into a human-readable string.
 * @param locationData {Object} Geocode.xyz reverse lookup response
 * @returns {string}
 */
function geocodeLocationToString(locationData) {
  const parts = [
    locationData.staddress,
    locationData.city,
    locationData.country,
  ].filter((x) => !!x);

  return parts.join(', ');
}

/**
 * Use the geocode.xyz API to reverse lookup the users address
 * @param coords {LatLng}
 * @returns {Promise<{text: string}>}
 */
function reverseLocation(coords) {
  const requestUrl = `https://geocode.xyz/${coords.latitude},${coords.longitude}?json=1`;
  return axios.get(requestUrl)
    .then((response) => Promise.resolve({
      ...coords,
      text: geocodeLocationToString(response.data),
    }));
}

export default {
  name: 'GeolocationInput',
  props: {
    label: {
      type: String,
      default: 'Please click to get your location',
    },
  },
  data() {
    return {
      loading: false,
      locationText: '',
    };
  },
  methods: {
    fetchLocation() {
      this.loading = true;
      getGeolocation()
        .then((location) => reverseLocation(location.coords))
        .then((reversedLocation) => {
          this.loading = false;
          this.locationText = reversedLocation.text;
          this.$emit('input', reversedLocation);
        })
        .catch((e) => { this.$emit('error', e); });
    },
  },
  computed: {
    locationLabel() {
      return this.locationText || this.label;
    },
  },
};
</script>
