<template>
  <v-col>
    <DemandTable
      :preferences="demandTablePrefs"
      :handleSortBy="handleSortBy"
      :demandResults="demandResults"
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
  props: ['demandTablePrefs', 'handleSortBy', 'demandResults'],
};
</script>

<style scoped>
</style>
