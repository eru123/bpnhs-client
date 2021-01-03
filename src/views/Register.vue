<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <v-card max-width="600" class="mx-auto pa-4" flat :dark="darkMode">
          <v-card-title align-center justify-center>
            <v-spacer></v-spacer>
            <h1>Register</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-form ref="registerForm" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="fname"
                    :rules="[rules.req, rules.minName, rules.maxName]"
                    :error-messages="
                      err.fname === true ? undefined : err.fname || undefined
                    "
                    v-on:keyup="err.fname = true"
                    label="Firstname"
                    maxlength="36"
                    prepend-icon="mdi-account-edit"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="mname"
                    :rules="[rules.req, rules.minName, rules.maxName]"
                    :error-messages="
                      err.mname === true ? undefined : err.mname || undefined
                    "
                    v-on:keyup="err.mname = true"
                    label="Middlename"
                    maxlength="36"
                    prepend-icon="mdi-account-edit"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="lname"
                    :rules="[rules.req, rules.minName, rules.maxName]"
                    :error-messages="
                      err.lname === true ? undefined : err.lname || undefined
                    "
                    v-on:keyup="err.lname = true"
                    label="Lastname"
                    maxlength="36"
                    prepend-icon="mdi-account-edit"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    :items="['male', 'female']"
                    :rules="[rules.gender]"
                    label="Gender"
                    v-model="gender"
                    :hint="'You selected ' + gender"
                    prepend-icon="mdi-human-male-female"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="user"
                    label="Username"
                    :rules="[rules.req, rules.minUser, rules.maxUser]"
                    :error-messages="
                      err.user === true ? undefined : err.user || undefined
                    "
                    v-on:keyup="err.user = true"
                    required
                    prepend-icon="mdi-account-circle"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    :rules="[rules.req, rules.email]"
                    :error-messages="
                      err.email === true ? undefined : err.email || undefined
                    "
                    v-on:keyup="err.email = true"
                    hint="E-mail is valid"
                    required
                    prepend-icon="mdi-email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="phone"
                    label="Mobile Phone"
                    :rules="[rules.req, rules.phone]"
                    required
                    prepend-icon="mdi-phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="address"
                    label="Address"
                    :rules="[rules.req]"
                    required
                    prepend-icon="mdi-crosshairs-gps"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="position"
                    :rules="[rules.req]"
                    label="Position in School"
                    :items="positions"
                    v-on:change="updateLevels"
                    v-on:click="updateLevels"
                    prepend-icon="mdi-account-tie"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="level"
                    :label="
                      position != ''
                        ? position.charAt(0).toUpperCase() +
                          position.slice(1).toLowerCase() +
                          ' Level'
                        : 'Level'
                    "
                    :items="levels"
                    prepend-icon="mdi-account-details"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="pass"
                    :append-icon="showP ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.req, rules.minPass, rules.maxPass]"
                    :type="showP ? 'text' : 'password'"
                    label="Password"
                    :hint="pass.length >= 8 ? 'Passwork OK' : 'Weak Password'"
                    :error-messages="
                      err.pass === true ? undefined : err.pass || undefined
                    "
                    v-on:keyup="err.pass = true"
                    counter
                    prepend-icon="mdi-lock"
                    @click:append="showP = !showP"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="cpass"
                    :append-icon="showC ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.req, passwordMatch]"
                    :type="showC ? 'text' : 'password'"
                    label="Confirm Password"
                    :hint="
                      pass.length > 0
                        ? 'Password matched'
                        : 'Confirm your password'
                    "
                    prepend-icon="mdi-lock-outline"
                    @click:append="showC = !showC"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="text-right">
                  <v-btn
                    class="ml-4 mb-4"
                    :color="darkMode ? 'dark' : 'error'"
                    @click="reset"
                  >
                    <v-icon>mdi-trash-can</v-icon> Clear Form
                  </v-btn>
                  <v-btn
                    class="ml-4 mb-4"
                    :color="darkMode ? 'dark' : 'info'"
                    @click="resetValidation"
                  >
                    <v-icon>mdi-format-clear</v-icon> Reset Validation
                  </v-btn>
                </v-col>
                <v-col cols="12" class="mt-4">
                  <v-btn
                    :disabled="!valid"
                    :color="darkMode ? 'dark' : 'primary'"
                    depressed
                    block
                    large
                    rounded
                    :loading="loading"
                    @click="validate"
                    >Register</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <Alert
      :show="alert.show"
      :message="alert.message"
      :title="alert.title"
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
  name: "Register",
  data: () => ({
    loading: false,
    pass: "",
    user: "",
    alert: { show: false, message: "", title: "" },
    registred: false,
    failedLogin: false,
    valid: false,
    fname: "",
    mname: "",
    lname: "",
    email: "",
    gender: "",
    password: "",
    cpass: "",
    position: "",
    level: "0",
    showP: false,
    showC: false,
    phone: "",
    address: "",
    err: {
      user: true,
      fname: true,
      lname: true,
      mname: true,
      email: true,
      pass: true
    },
    rules: {
      req: value => !!value || "Required.",
      email: v => /.+@.+\..+/.test(v) || "Invalid E-mail format",
      minUser: v => (v && v.length >= 3) || "Min 3 characters",
      maxUser: v => (v && v.length <= 36) || "Max 36 characters",
      minName: v => (v && v.length >= 2) || "Min 2 characters",
      maxName: v => (v && v.length <= 36) || "Max 36 characters",
      minPass: v => (v && v.length >= 4) || "Min 4 characters",
      maxPass: v => (v && v.length <= 1024) || "Max 36 characters",
      gender: v =>
        (v && (v == "male" || v == "female")) || "Select your gender",
      phone: v =>
        (v &&
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(v) &&
          v.length <= 20 &&
          v.length >= 7) ||
        "Invalid mobile phone format"
    },
    positions: ["student", "teacher", "staff", "admin"],
    levels: []
  }),
  async beforeCreate() {
    await prevent.auth(this, { name: "Home" });
  },
  methods: {
    async register() {
      this.loading = true;
      let respond = false;
      post("register", this.formData())
        .then(async e => {
          console.log(e);
          respond = true;
          if (typeof e.data.status == "boolean" && e.data.status === true) {
            this.alert = {
              show: true,
              message: "Account successfully created",
              title: "Success"
            };
            this.registered = true;
          } else if (typeof e.data.errors == "object") {
            this.err = e.data.errors;
            this.alert = {
              show: true,
              message:
                "Invalid Registration Form, Make sure you typed all information with a correct character format.",
              title: "Error"
            };
          } else {
            this.alert = {
              show: true,
              message: "Invalid Server Response, Please try again later.",
              title: "Error"
            };
          }
        })
        .catch(() => {
          if (respond === true) {
            this.alert = {
              show: true,
              message: "Invalid Registration Form",
              title: "Error"
            };
          } else {
            this.alert = {
              show: true,
              message: "Failed to contact server",
              title: "Error"
            };
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async login() {
      this.loading = true;
      post("login", { user: this.user, pass: this.pass })
        .then(e => {
          if (e.data.token.length > 0) {
            let token = e.data.token;
            db.token.set(token);
            this.$toast.success("Welcome!");
            this.$router.push({ name: "Home" });
          }
        })
        .catch(() => {
          this.error = true;
          this.alert = {
            show: true,
            message: "Failed to login your new account, try to login manually.",
            title: "Login Error"
          };
          this.failedLogin = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    validate() {
      if (this.$refs.registerForm.validate()) {
        this.register();
      }
    },
    reset() {
      this.$router.go(0);
    },
    resetValidation() {
      this.$refs.registerForm.resetValidation();
    },
    formData() {
      return {
        user: this.user,
        fname: this.fname,
        mname: this.mname,
        lname: this.lname,
        email: this.email,
        gender: this.gender,
        pass: this.pass,
        position: this.position,
        level: this.level,
        phone: this.phone,
        address: this.address
      };
    },
    updateLevels() {
      if (this.position == "student") {
        this.levels = ["7", "8", "9", "10", "11", "12"];
      } else if (this.position == "teacher") {
        this.levels = ["1", "2", "3", "4"];
      } else if (this.position == "staff") {
        this.levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      } else if (this.position == "admin") {
        this.levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      }
    },
    onAlertClose(val) {
      if (this.registered === true) {
        this.login();
        this.registered = false;
      } else if (this.failedLogin === true) {
        this.$router.push({ name: "Login" });
      } else {
        this.alert.show = val;
      }
    }
  },
  computed: {
    passwordMatch() {
      return () => this.pass === this.cpass || "Password does not match";
    },
    darkMode() {
      return this.$store.state.darkMode;
    }
  },
  components: {
    Alert
  }
};
</script>
