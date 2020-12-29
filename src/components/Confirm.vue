<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text> {{ message }} </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="agree"> Ok </v-btn>
          <v-btn color="blue darken-1" text @click="disagree"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "ErrorPrompt",
  methods: {
    agree() {
      this.$emit("confirm", true);
    },
    disagree() {
      this.$emit("confirm", false);
    }
  },
  props: {
    title: String,
    show: Boolean,
    message: String
  }
};
</script>
