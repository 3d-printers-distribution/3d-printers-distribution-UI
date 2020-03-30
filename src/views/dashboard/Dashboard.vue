<template>
  <v-container class="dashboard">
    <v-card>
      <v-card-text>
        <span class="title">Zurich, Switzerland</span>
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
          />
        </v-slide-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import supplyData from '../../../mocks/raw/supply';
import demandData from '../../../mocks/raw/demand';

import {
  getConsumers,
  // createDemand,
} from '../../xhr/consumer';

function sanitizeDemandResults(data) {
  console.log(data);

  return data.map((row) => ({
    id: row.id,
    location: row.name,
    distanceKm: '??',
    quantity: row.demand.reduce((acc, demand) => acc + demand.amountRemaining, 0),
  }));
}

export default {
  name: 'Dashboard',
  methods: {
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
  },
  created() {
    if (this.$route.name === 'dashboard') { this.$router.replace({ name: 'supply' }); }

    const consumersReq = getConsumers();
    consumersReq.then((res) => {
      this.demandResults = sanitizeDemandResults(res.data);
    });

    /*
    // TODO extract this function but not sure how to do so the vue way
    // do we support geolocation
    if (!('geolocation' in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition((pos) => {
      // this.gettingLocation = false;
      this.state.currentLocation = pos;
    }, (err) => {
      // this.gettingLocation = false;
      // this.errorStr = err.message;
    }); */
  },
  data() {
    return {
      currentLocation: {},
      supplyQuery: {},
      supplyResults: supplyData,
      supplyTablePrefs: {
        sortBy: ['distanceKm'],
      },
      demandQuery: {},
      demandResults: demandData,
      demandTablePrefs: {
        sortBy: ['distanceKm'],
      },
    };
  },
};
</script>

<style scoped></style>
