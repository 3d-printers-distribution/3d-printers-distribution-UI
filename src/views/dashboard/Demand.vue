<template>
  <v-col>
    <DemandTable :preferences="demandTablePrefs" :handleSortBy="handleSortBy" />
  </v-col>
</template>

<script>
import DemandTable from '../../components/DemandTable.vue';

export default {
  name: 'Demand',
  components: {
    DemandTable,
  },
  props: ['demandTablePrefs', 'handleSortBy'],
};
</script>

<style scoped>
</style>
