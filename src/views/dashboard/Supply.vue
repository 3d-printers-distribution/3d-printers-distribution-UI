<template>
  <v-col>
    <SupplyTable :preferences="supplyTablePrefs" :handleSortBy="handleSortBy" />
  </v-col>
</template>

<script>
import SupplyTable from '../../components/SupplyTable.vue';

export default {
  name: 'Supply',
  components: {
    SupplyTable,
  },
  props: ['supplyTablePrefs', 'handleSortBy'],
};
</script>

<style scoped>
</style>
