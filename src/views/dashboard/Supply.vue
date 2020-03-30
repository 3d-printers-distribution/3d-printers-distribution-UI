<template>
  <v-col>
    <SupplyTable
      :preferences="supplyTablePrefs"
      :handleSortBy="handleSortBy"
      :supplyData="supplyData"
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
  props: ['supplyTablePrefs', 'handleSortBy', 'supplyData'],
};
</script>

<style scoped>
</style>
