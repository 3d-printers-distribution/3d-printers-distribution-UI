<template>
  <v-col>
    <v-card>
      <v-card-text>
        Prepare your delivery here.
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        <v-data-table
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <span class="title">Supply</span>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-col>
      <v-col>
        <v-data-table
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <span class="title">Demand</span>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'Distribute',
};
</script>

<style scoped>
</style>
