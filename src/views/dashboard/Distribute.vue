<template>
  <v-col>
    <v-card>
      <v-card-text>
        Prepare your delivery here.
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        <SupplyTable :preferences="supplyTablePrefs" :handleSortBy="handleSortBy"  />
      </v-col>
      <v-col>
        <DemandTable :preferences="demandTablePrefs" :handleSortBy="handleSortBy" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import SupplyTable from '../../components/SupplyTable.vue';
import DemandTable from '../../components/DemandTable.vue';

export default {
  name: 'Distribute',
  components: {
    SupplyTable,
    DemandTable,
  },
  props: {
    demandTablePrefs: { type: Object },
    supplyTablePrefs: { type: Object },
    handleSortBy: { type: Function },
  },
};
</script>

<style scoped>
</style>
