<template>
  <v-data-table
    :headers="supplyHeaders"
    :items="supplyData"
    :single-select=true
    show-select
    item-key="id"
    class="elevation-1"
    :options="preferences"
    @update:options="(e) => handleSortBy('supply', e)"
    @item-selected="(e) => handleSelection('supply', e)"
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
export default {
  name: 'Table',
  data() {
    return {
      supplyHeaders: [
        { text: 'Location', value: 'location' },
        { text: 'Distance (km)', value: 'distanceKm' },
        { text: 'Available', value: 'quantity' },
      ],
    };
  },
  props: ['preferences', 'handleSortBy', 'supplyData', 'handleSelection'],
};
</script>

<style scoped>

</style>
