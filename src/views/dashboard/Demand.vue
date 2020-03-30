<template>
  <v-col>
    <v-card>
      <v-card-text>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <AddSupplyDemandDialog
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

export default {
  name: 'Demand',
  components: {
    DemandTable,
    AddSupplyDemandDialog,
  },
  props: ['demandTablePrefs', 'handleSortBy', 'demandData'],
};
</script>

<style scoped>
</style>
