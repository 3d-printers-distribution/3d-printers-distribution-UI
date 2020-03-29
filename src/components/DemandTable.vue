<template>
  <v-data-table
    :headers="demandHeaders"
    :items="demandData"
    :single-select=true
    show-select
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <span class="title">Demand</span>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import demandData from '../../mocks/raw/demand';

export default {
  name: 'Table',
  data() {
    return {
      demandHeaders: [
        { text: 'Location', value: 'location' },
        { text: 'Distance', value: 'distanceKm' },
        { text: 'Request', value: 'quantity' },
      ],
      demandData,
    };
  },
};
</script>

<style scoped>

</style>
