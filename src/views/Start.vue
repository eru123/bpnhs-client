<template>
  <v-container>
    <h1>Home</h1>
    <v-btn link :to="{ name: 'Login' }" color="primary">Enroll now</v-btn>
  </v-container>
</template>

<script>
import prevent from "@/plugins/prevent";
export default {
  name: "Start",
  async beforeCreate() {
    await prevent.auth(this, { name: "Home" });
  },
};
</script>
