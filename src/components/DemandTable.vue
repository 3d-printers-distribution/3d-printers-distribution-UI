<template>
  <v-data-table
    :headers="demandHeaders"
    :items="demandResults"
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
export default {
  name: 'Table',
  data() {
    return {
      demandHeaders: [
        { text: 'Location', value: 'location' },
        { text: 'Distance (km)', value: 'distanceKm' },
        { text: 'Request', value: 'quantity' },
      ],
    };
  },
  props: ['preferences', 'handleSortBy', 'demandResults'],
};
</script>

<style scoped>

</style>
