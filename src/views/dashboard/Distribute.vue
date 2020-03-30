<template>
  <v-col>
    <v-card>
      <v-card-text>
        Prepare your delivery here.
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        <SupplyTable
          :preferences="supplyTablePrefs"
          :handleSortBy="handleSortBy"
          :supplyData="supplyData"
        />
      </v-col>
      <v-col>
        <DemandTable
          :preferences="demandTablePrefs"
          :handleSortBy="handleSortBy"
          :demandData="demandData"
        />
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
    supplyData: { type: Array },
    demandData: { type: Array },
  },
};
</script>

<style scoped>
</style>
