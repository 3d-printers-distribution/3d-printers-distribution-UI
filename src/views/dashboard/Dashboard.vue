<template>
  <v-container class="dashboard">
    <v-card>
      <v-card-text>
        <span v-if="errorStr" class="title">Zurich, Switzerland</span>
         <span v-if="gettingLocation">
          <i>Getting your location...</i>
        </span>

        <span v-if="address">
          {{ address.city }}, {{ address.state }}, {{ address.country }}
        </span>
      </v-card-text>
      <v-card-text>
        Show activity within (km):
        <v-text-field
          type="number"
          v-model.number="operatingRadiusKm"
        />
      </v-card-text>
    </v-card>

    <v-row>
      <v-col>
        <v-tabs
          icons-and-text
          grow
        >
          <v-tab :to="{ name: 'supply'}">
            Supply
            <v-icon>mdi-printer-3d</v-icon>
          </v-tab>
          <v-tab :to="{ name: 'distribute'}">
            Distribute
            <v-icon>mdi-truck-delivery</v-icon>
          </v-tab>
          <v-tab :to="{ name: 'demand'}">
            Demand
            <v-icon>mdi-medical-bag</v-icon>
          </v-tab>
        </v-tabs>

        <v-slide-x-transition mode="out-in">
          <router-view
            :demandTablePrefs="demandTablePrefs"
            :supplyTablePrefs="supplyTablePrefs"
            :supplyData="supplyResults"
            :demandData="demandResults"
            :handleSortBy="handleSortBy"
            :handleReset="handleReset"
          />
        </v-slide-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import {
  getConsumers,
} from '../../xhr/consumer';
import {
  getProducers,
} from '../../xhr/producer';

const ENDPOINT = 'https://nominatim.openstreetmap.org/reverse';
const FORMAT = 'jsonv2';

function sanitizeDemandResults(data) {
  return data
    .filter(({ demand }) => demand && demand.length > 0)
    .map((row) => ({
      id: row.id,
      demandId: row.demand[0].id,
      contact: row.contactInformation,
      location: row.name,
      distanceKm: '??',
      // quantity: row.demand.reduce((acc, demand) => acc + demand.amountRemaining, 0),
      quantity: row.demand[0].amountRemaining,
    }));
  // .filter(({ quantity }) => quantity > 0);
}

function sanitizeSupplyResults(data) {
  return data
    .filter(({ stock }) => stock && stock.length > 0)
    .map((row) => ({
      id: row.id,
      stockId: row.stock[0].id,
      contact: row.contactInformation,
      location: row.name,
      distanceKm: '??',
      // quantity: row.stock.reduce((acc, supply) => acc + supply.amountRemaining, 0),
      quantity: row.stock[0].amountRemaining,
    }));
  // .filter(({ quantity }) => quantity > 0);
}

const sampleLoc = { latitude: 0, longitude: 0 };

export default {
  name: 'Dashboard',
  watch: {
    operatingRadiusKm(rangeKm) {
      this.updateQueries({ rangeKm });
    },
  },
  methods: {
    fetchProducers() {
      const producersReq = getProducers(sampleLoc, this.demandQuery.rangeKm);
      producersReq.then((res) => {
        this.supplyResults = sanitizeSupplyResults(res.data);
      });
    },
    fetchConsumers() {
      const consumersReq = getConsumers(sampleLoc, this.demandQuery.rangeKm);
      consumersReq.then((res) => {
        this.demandResults = sanitizeDemandResults(res.data);
      });
    },
    updateQueries(fields) {
      this.supplyQuery = {
        ...this.supplyQuery,
        ...fields,
      };
      this.demandQuery = {
        ...this.demandQuery,
        ...fields,
      };
      // todo: be smarter about knowing when to call each update
      // for now the only fields are location and range which affect both
      this.fetchProducers();
      this.fetchConsumers();
    },
    async getLocation(lat, long) {
      const { data } = await axios.get(ENDPOINT, {
        params: {
          format: FORMAT,
          lat,
          lon: long,
        },
      });
      this.gettingLocation = false;
      this.address = data.address;
      return data.address;
    },
    handleSortBy(table, prefs) {
      switch (table) {
        case 'supply': {
          this.supplyTablePrefs = prefs;
          break;
        }
        case 'demand': {
          this.demandTablePrefs = prefs;
          break;
        }
        default: {
          break; }
      }
    },
    handleReset() {
      this.fetchProducers();
      this.fetchConsumers();
    },
  },
  async created() {
    if (this.$route.name === 'dashboard') {
      this.$router.replace({ name: 'supply' });
    }

    if (!('geolocation' in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;
    // get position
    await navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos;
      this.getLocation(this.location.coords.latitude, this.location.coords.longitude);
    }, (err) => {
      this.gettingLocation = false;
      this.errorStr = err.message;
    });
  },
  mounted() {
    this.fetchProducers();
    this.fetchConsumers();
  },
  data() {
    return {
      currentLocation: {},
      supplyQuery: {},
      supplyResults: [],
      supplyTablePrefs: {
        sortBy: ['distanceKm'],
      },
      demandQuery: {},
      demandResults: [],
      demandTablePrefs: {
        sortBy: ['distanceKm'],
      },
      operatingRadiusKm: 20,
      location: null,
      gettingLocation: false,
      errorStr: null,
      address: '',
    };
  },
};
</script>

<style scoped></style>
