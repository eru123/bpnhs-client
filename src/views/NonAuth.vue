<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :dark="darkMode">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> Menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
          :color="darkMode ? 'white' : 'primary'"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          :color="darkMode ? 'white' : 'primary'"
          @click="toggleDarkMode"
        >
          <v-list-item-icon>
            <v-icon>{{
              darkMode ? "mdi-toggle-switch" : "mdi-toggle-switch-off-outline"
            }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              >Switch to
              {{ darkMode ? "Light" : "Dark" }} mode</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="darkMode ? 'dark' : 'primary'"
      dark
      outlined
      elevation="0"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Brooke's Point NHS</v-toolbar-title>
    </v-app-bar>

    <v-main :class="darkMode ? 'grey darken-3 white--text' : ''">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { token } from "@/plugins/db";
export default {
  data: () => ({
    drawer: null,
    token: false,
    items: [
      {
        title: "Home",
        icon: "mdi-home",
        path: { name: "Landing" }
      },
      {
        title: "Login",
        icon: "mdi-login",
        path: { name: "Login" }
      },
      {
        title: "Register",
        icon: "mdi-text-account",
        path: { name: "Register" }
      },
      {
        title: "About",
        icon: "mdi-alpha-a-circle",
        path: { name: "NAAbout" }
      },
      {
        title: "Terms and Conditions",
        icon: "mdi-license",
        path: { name: "NATermsAndConditions" }
      }
    ],
    right: null
  }),
  beforeCreate() {
    this.token = token.state(this);
  }
};
</script>
