<template>
  <v-col>
    <SupplyTable view="supply" />
  </v-col>
</template>

<script>
import SupplyTable from '../../components/SupplyTable.vue';

export default {
  name: 'Supply',
  components: {
    SupplyTable,
  },
};
</script>

<style scoped>
</style>
