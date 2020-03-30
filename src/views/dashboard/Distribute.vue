<template>
  <v-col>
    <v-card>
      <v-card-text>
        Select a Supplier and Requester from the lists below, and then click confirm when sure.
        You will be prompted with contact details and asked to contact the Supplier and Requester
        to confirm address and timings.
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        <SupplyTable
          :preferences="supplyTablePrefs"
          :handleSortBy="handleSortBy"
          :supplyData="supplyData"
          :handle-selection="handleSelection"
        />
      </v-col>
      <v-col>
        <DemandTable
          :preferences="demandTablePrefs"
          :handleSortBy="handleSortBy"
          :demandData="demandData"
          :handle-selection="handleSelection"
        />
      </v-col>
    </v-row>
    <v-card>
      <v-card-text v-if="selectedProvider && selectedConsumer">
        I will deliver
        <strong>{{shippingQuantity(selectedProvider, selectedConsumer)}}</strong> masks
        from
        <strong>{{selectedProvider.location}}</strong> to
        <strong>{{selectedConsumer.location}}</strong>
        <v-btn
          @click="confirm"
        >
          Confirm
        </v-btn>
      </v-card-text>
      <v-card-text v-else>
        Please select a Supplier and Requester from the lists above
      </v-card-text>
    </v-card>
    <v-dialog v-if="selectedProvider && selectedConsumer" v-model="confirmationDialog" persistant>
      <v-card>
        <v-card-text>
          <h1>Thanks for your help!</h1>
          <div>
            <p>
              Delivering
              <strong>{{shippingQuantity(selectedProvider, selectedConsumer)}}</strong>
              masks from
              <strong>{{selectedProvider.location}}</strong> to
              <strong>{{selectedConsumer.location}}</strong>.
            </p>
            <p>
              Please contact both parties to notify them and get their address details and arrange
              a time:
            </p>
            <p>
              {{selectedProvider.location}}: <br />
              {{selectedProvider.contact.telephone}}
              {{selectedProvider.contact.eMail}}
            </p>
            <p>
              {{selectedConsumer.location}}: <br />
              {{selectedConsumer.contact.telephone}}
              {{selectedConsumer.contact.eMail}}
            </p>
          </div>
          <v-btn
            @click="reset"
          >
            OK
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import SupplyTable from '../../components/SupplyTable.vue';
import DemandTable from '../../components/DemandTable.vue';
import { scheduleDelivery } from '../../xhr/deliveries';

export default {
  name: 'Distribute',
  components: {
    SupplyTable,
    DemandTable,
  },
  methods: {
    handleSelection(type, data) {
      switch (type) {
        case 'supply':
          this.selectedProvider = data.value ? data.item : null;
          break;
        case 'demand':
          this.selectedConsumer = data.value ? data.item : null;
          break;
        default:
          break;
      }
    },
    confirm() {
      const { stockId } = this.selectedProvider;
      const { demandId } = this.selectedConsumer;
      const amount = this.shippingQuantity(this.selectedProvider, this.selectedConsumer);
      scheduleDelivery(stockId, demandId, amount).then(this.showDeliveryConfirmation);
    },
    showDeliveryConfirmation() {
      this.confirmationDialog = true;
    },
    reset() {
      this.selectedProvider = null;
      this.selectedConsumer = null;
      this.confirmationDialog = false;
      this.handleReset();
    },
    shippingQuantity(a, b) {
      if (a && b) {
        return Math.min(a.quantity, b.quantity);
      }
      return 0;
    },
  },
  data() {
    return {
      selectedProvider: null,
      selectedConsumer: null,
      confirmationDialog: false,
    };
  },
  props: {
    demandTablePrefs: { type: Object },
    supplyTablePrefs: { type: Object },
    handleSortBy: { type: Function },
    supplyData: { type: Array },
    demandData: { type: Array },
    handleReset: { type: Function },
  },
};
</script>

<style scoped>
</style>
