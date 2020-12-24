<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
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
          color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark outlined elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Brooke's Point NHS</v-toolbar-title>
    </v-app-bar>
    <v-main color="#333">
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
    items: [],
    right: null
  }),
  created() {
    this.nav();
  },
  methods: {
    nav() {
      this.token = token.state(this);
      this.items = [];
      if (this.token != true) {
        this.items.push({
          title: "Home",
          icon: "mdi-home",
          path: { name: "Start" }
        });
        this.items.push({
          title: "Login",
          icon: "mdi-login",
          path: { name: "Login" }
        });
        this.items.push({
          title: "Register",
          icon: "mdi-text-account",
          path: { name: "Register" }
        });
        this.items.push({
          title: "About",
          icon: "mdi-alpha-a-circle",
          path: { name: "About" }
        });
        this.items.push({
          title: "Terms and Conditions",
          icon: "mdi-license",
          path: { name: "TermsAndConditions" }
        });
      } else {
        this.items.push({
          title: "Home",
          icon: "mdi-home",
          path: { name: "Home" }
        });
        this.items.push({
          title: "About",
          icon: "mdi-alpha-a-circle",
          path: { name: "About" }
        });
        this.items.push({
          title: "Terms and Conditions",
          icon: "mdi-license",
          path: { name: "TermsAndConditions" }
        });
        this.items.push({
          title: "Logout",
          icon: "mdi-power",
          path: { name: "Logout" }
        });
      }
    }
  }
};
</script>
