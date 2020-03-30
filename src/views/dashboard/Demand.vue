<template>
  <v-col>
    <DemandTable
      :preferences="demandTablePrefs"
      :handleSortBy="handleSortBy"
      :demandData="demandData"
    />
  </v-col>
</template>

<script>
import DemandTable from '../../components/DemandTable.vue';

export default {
  name: 'Demand',
  components: {
    DemandTable,
  },
  props: ['demandTablePrefs', 'handleSortBy', 'demandData'],
};
</script>

<style scoped>
</style>
