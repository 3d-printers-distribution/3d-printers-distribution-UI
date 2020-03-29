<template>
  <v-col>
    <SupplyTable
      :preferences="supplyTablePrefs"
      :handleSortBy="handleSortBy"
      :supplyResults="supplyResults"
    />
  </v-col>
</template>

<script>
import SupplyTable from '../../components/SupplyTable.vue';

export default {
  name: 'Supply',
  components: {
    SupplyTable,
  },
  props: ['supplyTablePrefs', 'handleSortBy', 'supplyResults'],
};
</script>

<style scoped>
</style>
