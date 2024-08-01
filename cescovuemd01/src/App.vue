<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
         <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

         <v-toolbar-title>cescovuemd01</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <MasterPage />
    </v-main>
  </v-app>
</template>

<script>
import MasterPage from "./pages/MasterPage";

export default {
  name: "App",

  components: {
    MasterPage
  },

  data: () => ({
    //
  })
};
</script>
