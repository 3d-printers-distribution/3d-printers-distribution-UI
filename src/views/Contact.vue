<template>
  <v-container
    fluid
    class="Contact ma-5"
  >
    <h1 class="title">The team behind this application</h1>
    <div class="subtitle-1 my-3">
      We started this work in the <a href="https://www.codevscovid19.org/">#CodeVsCOVID19</a>
      - Hackathon.</div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="200">
              <v-icon size="200">mdi-account-circle</v-icon>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="title">{{ person.name }}</div>
            <div class="subtitle-1">{{ person.role }}</div>
            <div class="mt-4">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn v-if="person.linkedin"
                         large :href="person.linkedin"
                         target="_blank"
                         v-on="on"
                  >
                    <v-icon large>mdi-linkedin</v-icon>
                  </v-btn>
                </template>
                <span>{{ person.linkedin }}</span>
              </v-tooltip>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      team: [
        {
          name: 'Andreas Ambühl',
          role: 'Front-end developer',
          link: 'https://github.com/AndiSwiss',
          linkedin: 'https://www.linkedin.com/in/andreas-ambuehl/',
        },
        { name: 'Dario Breitenstein', role: 'Front-end developer' },
        { name: 'Hanna Lisa Franz', role: 'Front-end developer' },
        { name: 'Luca Fluri', role: 'Front-end developer' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
