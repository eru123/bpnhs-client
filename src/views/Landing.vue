<template>
  <v-app>
    <v-main :class="darkMode ? 'grey darken-3 white--text' : ''">
      <Start />
    </v-main>
  </v-app>
</template>

<script>
import Start from "@/views/Start";
import prevent from "@/plugins/prevent";
export default {
  name: "Landing",
  components: {
    Start
  },
  async beforeCreate() {
    await prevent.auth(this, { name: "Home" });
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  }
};
</script>
