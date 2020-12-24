<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
import prevent from "@/plugins/prevent";
export default {
  name: "Start",
  created() {
    prevent.auth(this, { name: "Home" });
  },
};
</script>
