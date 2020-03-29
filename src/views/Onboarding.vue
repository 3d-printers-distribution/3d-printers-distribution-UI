<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="10" lg="8">
        <v-card>
          <v-card-title>Get Started</v-card-title>
          <v-card-text>
              <p class="body-1">Before you can begin, we need to know some details:</p>
              <v-form ref="onboarding-form">
                <v-text-field
                  filled
                  label="Full name"
                  required
                ></v-text-field>
                <v-text-field
                  filled
                  label="Phone Number"
                  required
                ></v-text-field>
                <v-text-field
                  filled
                  label="Address"
                  required
                ></v-text-field>
                <v-text-field
                  filled
                  label="City"
                  required
                ></v-text-field>
              </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Onboarding',
};
</script>

<style scoped>
</style>
