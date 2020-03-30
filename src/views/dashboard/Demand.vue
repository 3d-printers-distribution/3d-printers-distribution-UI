<template>
  <v-col>
    <v-card>
      <v-card-text>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <AddSupplyDemandDialog @submit="addDemand"
            title="Add your demand"
            helpertext="How many face shields will you need?">
          </AddSupplyDemandDialog>
        </v-row>
      </v-card-text>
    </v-card>
  <v-row>
    <v-col>
      <DemandTable
        :preferences="demandTablePrefs"
        :handleSortBy="handleSortBy"
        :demandData="demandData"
      />
    </v-col>
  </v-row>
  </v-col>
</template>

<script>
import DemandTable from '../../components/DemandTable.vue';
import AddSupplyDemandDialog from './AddSupplyDemandDialog.vue';
import { createDemand } from '../../xhr/consumer';

export default {
  name: 'Demand',
  components: {
    DemandTable,
    AddSupplyDemandDialog,
  },
  props: ['demandTablePrefs', 'handleSortBy', 'demandData'],
  methods: {
    addDemand(amount) {
      createDemand('dfac0bf9-c4af-4d45-881c-7f1849d8a8a5', amount);
    },
  },
};
</script>

<style scoped>
</style>
