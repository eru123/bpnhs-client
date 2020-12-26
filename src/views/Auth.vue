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
import prevent from "@/plugins/prevent";
import { token } from "@/plugins/db";

export default {
  data: () => ({
    drawer: null,
    token: false,
    items: [
      { title: "Home", icon: "mdi-home", path: { name: "Home" } },
      { title: "About", icon: "mdi-alpha-a-circle", path: { name: "AAbout" } },
      {
        title: "Terms and Conditions",
        icon: "mdi-license",
        path: { name: "ATermsAndConditions" },
      },
      { title: "Logout", icon: "mdi-power", path: { name: "Logout" } },
    ],
    right: null,
  }),
  created() {
    prevent.unauth(this, { name: "Login" });
    this.token = token.state(this);
  },
};
</script>
