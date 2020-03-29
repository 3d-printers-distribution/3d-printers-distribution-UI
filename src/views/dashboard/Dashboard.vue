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
            :handleSortBy="handleSortBy"
            :supplyResults="supplyResults"
            :demandResults="demandResults"
          />
        </v-slide-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import supplyData from '../../../mocks/raw/supply';
import demandData from '../../../mocks/raw/demand';

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
          console.warn('error');
        }
      }
    },
  },
  created() {
    if (this.$route.name === 'dashboard') { this.$router.replace({ name: 'supply' }); }

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
      console.log(err);
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
