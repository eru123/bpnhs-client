<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <v-card max-width="400" class="mx-auto pa-4" flat>
          <v-card-title align-center justify-center>
            <v-spacer></v-spacer>
            <h1>Login</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                prepend-icon="mdi-account-circle"
                v-model="user"
              />
              <v-text-field
                type="password"
                label="Password"
                v-model="pass"
                prepend-icon="mdi-lock"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              depressed
              block
              large
              rounded
              :loading="loading"
              @click="login"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <Alert
      title="Login Error"
      :show="error"
      :message="errorMessage"
      @close="onAlertClose"
    />
  </v-container>
</template>
<script>
import Alert from "@/components/Alert";
import post from "@/plugins/api";
import db from "@/plugins/db";
import prevent from "@/plugins/prevent";

export default {
  name: "Login",
  data: () => ({
    loading: false,
    pass: "",
    user: "",
    error: false,
    errorMessage: "",
  }),
  created() {
    prevent.auth(this, { name: "Home" });
  },
  methods: {
    async login() {
      if (this.user.length > 0 && this.pass.length > 0) {
        this.loading = true;
        let rec = false;
        post("login", { user: this.user, pass: this.pass })
          .then((e) => {
            rec = true;
            if (e.data.token.length > 0) {
              let token = e.data.token;
              db.token.set(token);
              this.$router.push({ name: "Home" });
            }
          })
          .catch(() => {
            if (rec === true) {
              this.errorMessage = "Invalid credentials";
            } else {
              this.errorMessage = "Failed to contact server";
            }
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.error = true;
        this.errorMessage = "Input both username and password!";
      }
    },
    onAlertClose(val) {
      this.error = val;
    },
  },
  components: {
    Alert,
  },
};
</script>
