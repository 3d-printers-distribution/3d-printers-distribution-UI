<template>
  <v-data-table
    :headers="supplyHeaders"
    :items="supplyData"
    :single-select=true
    show-select
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <span class="title">Supply</span>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import supplyData from '../../mocks/raw/supply';

export default {
  name: 'Table',
  data() {
    return {
      supplyHeaders: [
        { text: 'Location', value: 'location' },
        { text: 'Distance', value: 'distanceKm' },
        { text: 'Available', value: 'quantity' },
      ],
      supplyData,
    };
  },
};
</script>

<style scoped>

</style>
