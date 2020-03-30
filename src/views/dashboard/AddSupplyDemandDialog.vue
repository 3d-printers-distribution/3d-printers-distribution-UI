<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn
              v-text="title"
              color="primary"
              v-on="on"
            >
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline" v-text="title"></span>
            </v-card-title>
            <v-card-text>
                  <p v-text="helpertext"></p>
                            <v-text-field
                              class="title"
                              single-line
                              type="number"
                              v-model.number="numberInput"
                              label="Amount:"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="onSubmit">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'AddSupplyDemandDialog',
  props: ['title', 'helpertext'],
  data() {
    return {
      dialog: false,
      numberInput: null,
    };
  },
  methods: {
    onSubmit() {
      this.dialog = false;
      this.$emit('submit', this.numberInput);
    },
  },
};
</script>
