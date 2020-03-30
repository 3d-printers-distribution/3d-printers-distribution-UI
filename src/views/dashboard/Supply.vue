<template>
  <v-col>
    <v-card>
      <v-card-text>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <AddSupplyDemandDialog @submit="addSupply"
            title="Add your supply"
            helpertext="How many face shields will you able to provide until 9 a.m. tomorrow?">
          </AddSupplyDemandDialog>
        </v-row>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
    <SupplyTable
      :preferences="supplyTablePrefs"
      :handleSortBy="handleSortBy"
      :supplyData="supplyData"
    />

      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import SupplyTable from '../../components/SupplyTable.vue';
import AddSupplyDemandDialog from './AddSupplyDemandDialog.vue';
import { createStock } from '../../xhr/producer';

export default {
  name: 'Supply',
  components: {
    AddSupplyDemandDialog,
    SupplyTable,
  },
  props: ['supplyTablePrefs', 'handleSortBy', 'supplyData'],
  methods: {
    addSupply(amount) {
      createStock('dfac0bf9-c4af-4d45-881c-7f1849d8a8a5', amount);
    },
  },
};
</script>
