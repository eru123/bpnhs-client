<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="290">
      <v-card :dark="darkMode" :outlined="darkMode">
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text> {{ message }} </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="darkMode ? 'dark' : 'blue darken-1'"
            text
            @click="close"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "ErrorPrompt",
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
  props: {
    title: String,
    show: Boolean,
    message: String,
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
};
</script>
