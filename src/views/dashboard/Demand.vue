<template>
  <v-col>
    <DemandTable view="demand" />
  </v-col>
</template>

<script>
import DemandTable from '../../components/DemandTable.vue';

export default {
  name: 'Demand',
  components: {
    DemandTable,
  },
};
</script>

<style scoped>
</style>
