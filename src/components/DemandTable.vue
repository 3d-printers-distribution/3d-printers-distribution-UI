<template>
  <v-data-table
    :headers="demandHeaders"
    :items="demandData"
    show-select
    item-key="id"
    class="elevation-1"
    :options="preferences"
    @update:options="(e) => handleSortBy('demand', e)"
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
        { text: 'Distance (km)', value: 'distanceKm' },
        { text: 'Request', value: 'quantity' },
      ],
      demandData,
    };
  },
  props: ['preferences', 'handleSortBy'],
};
</script>

<style scoped>

</style>
