<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="10" lg="8">
        <v-card>
          <v-card-title>Get Started</v-card-title>
          <v-card-text>
              <p class="body-2">Before you can begin, we need to know some details:</p>
              <v-form ref="onboarding-form">
                <section class="basic-form">
                  <v-text-field
                    filled
                    label="Full name *"
                    required
                    v-model="basicForm.name.field"
                    :rules="basicForm.name.rules"
                  ></v-text-field>
                  <v-text-field
                    filled
                    type="tel"
                    label="Phone Number *"
                    required
                    v-model="basicForm.phone.field"
                    :rules="basicForm.phone.rules"
                  ></v-text-field>
                  <v-text-field
                    filled
                    type="email"
                    label="Contact Email *"
                    required
                    v-model="basicForm.email.field"
                    :rules="basicForm.email.rules"
                  ></v-text-field>
                  <span class="caption">* Required</span>
                </section>

                <section class="mt-4">
                  <span class="title">How would you like to contribute?</span><br/>
                  <span class="caption">You will be able to change this later.</span>
                  <v-chip-group v-model="roleSelection">
                    <v-chip
                      v-for="role in userRoles"
                      :key="role.value"
                      v-text="role.text"
                      class="font-weight-medium"
                      active-class="primary--text"
                    ></v-chip>
                  </v-chip-group>
                </section>

                <section
                  class="consumer-form"
                  v-if="roleFromSelection === 'consumer'"
                >
                  <GeolocationInput @input="setGeolocation"/>
                </section>
                <section
                  class="supplier-form"
                  v-if="roleFromSelection === 'supplier'"
                >

                </section>

                <v-btn
                  large block
                  color="primary"
                  type="submit"
                >Submit</v-btn>
              </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GeolocationInput from './GeolocationInput.vue';

const userRoles = [
  {
    value: 'consumer',
    text: 'I need face shields',
  },
  {
    value: 'producer',
    text: 'I can supply face shields (by 3D Printing)',
  },
  {
    value: 'distributor',
    text: 'I can distribute face shields',
  },
];

export default {
  name: 'Onboarding',
  components: { GeolocationInput },
  data() {
    return {
      userRoles,
      roleSelection: 0,
      basicForm: {
        name: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.fieldRequired'), // Check if field is empty
          ],
        },
        phone: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.fieldRequired'), // Check if field is empty
          ],
        },
        email: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.emailRequired'), // Check if field is empty
            (v) => /.+@.+\..+/.test(v) || this.$t('validation.emailMustBeValid'), // Use regex to crudely validate the email
          ],
        },
      },
      consumerForm: {
        location: { lat: 0, lng: 0 },
        locationType: {
          value: '',
          choices: [
            { text: 'Hospital', value: 'HOSPITAL' },
            { text: 'Pharmacy', value: 'PHARMACY' },
          ],
        },
      },
      producerForm: {
        location: { lat: 0, lng: 0 },
      },
    };
  },
  computed: {
    roleFromSelection() {
      return userRoles[this.roleSelection].value;
    },
  },
  methods: {
    setGeolocation(location) {
      console.log(location);
    },
  },
};
</script>
