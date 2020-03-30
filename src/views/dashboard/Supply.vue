<template>
  <v-col>
    <v-card>
      <v-card-text>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <AddSupplyDemandDialog
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

export default {
  name: 'Supply',
  components: {
    AddSupplyDemandDialog,
    SupplyTable,
  },
  props: ['supplyTablePrefs', 'handleSortBy', 'supplyData'],
};
</script>
