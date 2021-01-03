<template>
  <v-app v-if="rendered">
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
  data: () => ({
    rendered: false,
  }),
  components: {
    Start,
  },
  async beforeCreate() {
    await prevent.auth(this, { name: "Home" });
    this.rendered = true;
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
};
</script>
