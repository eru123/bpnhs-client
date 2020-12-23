<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
import { token } from "@/plugins/db";
export default {
  name: "Home",
  data: () => ({
    token: false
  }),
  created() {
    this.token = token.state(this);
  }
};
</script>
