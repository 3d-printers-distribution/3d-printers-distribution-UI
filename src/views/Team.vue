<template>
  <v-container
    fluid
    class="Contact ma-5"
  >
    <h1 class="title">The team behind this application</h1>
    <div class="subtitle-1 my-3">
      We started this work in the <a href="https://www.codevscovid19.org/" target="_blank">#CodeVsCOVID19</a>
      - Hackathon.</div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="200" class="grey lighten-2">
              <v-img
                v-if="person.picture"
                :src="person.picture"
                alt="profile picture"></v-img>
              <v-icon v-else size="200">mdi-account-circle</v-icon>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="title">{{ person.name }}</div>
            <div class="subtitle-1">{{ person.role }}</div>
            <div class="mt-4">
              <v-row justify="center">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn v-if="person.linkedin"
                           large :href="person.linkedin"
                           target="_blank"
                           v-on="on"
                           class="mx-2 mb-2"
                           fab
                    >
                      <v-icon large>mdi-linkedin</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ person.linkedin }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn v-if="person.github"
                           large :href="person.github"
                           target="_blank"
                           v-on="on"
                           class="mx-2 mb-2"
                           fab
                    >
                      <v-icon large>mdi-github</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ person.github }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn v-if="person.website"
                           large :href="person.website"
                           target="_blank"
                           v-on="on"
                           class="mx-2 mb-2"
                           fab
                    >
                      <v-icon large>mdi-link-box-variant</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ person.website }}</span>
                </v-tooltip>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        // // Empty template:
        // {
        //   name: '',
        //   role: '',
        //   linkedin: '',
        //   github: '',
        // },
        {
          name: 'Adrian Lehmann',
          role: 'Backend Developer',
          linkedin: 'https://www.linkedin.com/in/adrian-lehmann',
          github: 'https://github.com/adrianleh',
          picture: '/pics/profile_adrian_lehmann.jpg',
        },
        {
          name: 'Andreas Ambühl',
          role: 'Front End Developer',
          linkedin: 'https://www.linkedin.com/in/andreas-ambuehl',
          github: 'https://github.com/AndiSwiss',
          picture: '/pics/profile_andreas_ambuehl.jpg',
        },
        {
          name: 'Apostolos Staridis',
          role: 'QA & Marketing',
          linkedin: 'https://www.linkedin.com/in/aposstar1994',
          picture: '/pics/profile_apos_staridis.jpg',
        },
        {
          name: 'Dario Breitenstein',
          role: 'Front End Developer',
          linkedin: 'https://www.linkedin.com/in/dario-breitenstein-397873a6',
          github: 'https://github.com/chdabre',
          picture: '/pics/profile_dario_breitenstein.jpg',
        },
        {
          name: 'Florent Bardy',
          role: 'Product Design & Marketing',
          linkedin: 'https://www.linkedin.com/in/florent-bardy-345263a',
          github: 'https://github.com/Flobar42',
          picture: '/pics/profile_florent_bardy.jpg',
        },
        {
          name: 'Hanna Lisa Franz',
          role: 'Front End Developer',
          github: 'https://github.com/nightbehaviour',
          picture: '/pics/profile_hanna_lisa_franz.jpg',
        },
        {
          name: 'Hussein Duvigneau',
          role: 'Front End Developer',
          linkedin: 'https://www.linkedin.com/in/husseinduvigneau',
          website: 'https://notmybase.com',
          picture: '/pics/profile_hussein_duvigneau.jpg',
        },
        {
          name: 'Luca Fluri',
          role: 'Front End Developer',
          linkedin: 'https://www.linkedin.com/in/luca-fluri-9a7286172',
          github: 'https://github.com/lucafluri',
          picture: '/pics/profile_luca_fluri.jpg',
        },
        {
          name: 'Manuel Ramirez Lopez',
          role: 'Project Leader',
          linkedin: 'https://www.linkedin.com/in/manuel-ramirez-lopez',
          github: 'https://github.com/chumbo4',
          picture: '/pics/profile_manuel_ramirez_lopez.jpg',
        },
        {
          name: 'Paschalis Dimitriou',
          role: 'Project Leader',
          linkedin: 'https://www.linkedin.com/in/paschalis-dimitriou-57786a61',
          picture: '/pics/profile_paschalis_dimitriou.jpg',
        },
        {
          name: 'Sebastian Markgraf',
          role: 'Backend Developer',
          linkedin: 'https://www.linkedin.com/in/sebastian-markgraf-85726a182/',
          github: 'https://github.com/sebimarkgraf',
          picture: '/pics/profile_sebastian_markgraf.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
