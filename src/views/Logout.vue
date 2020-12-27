<template>
  <v-app app>
    <v-main>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <div align="center" max-width="400" class="mx-auto pa-4">
              <div class="mb-8">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
              <div>
                <header>Logging out</header>
              </div>
            </div>
          </v-flex>
        </v-layout>
        <Confirm
          :show="show"
          title="Logout"
          message="Are you sure you want tot logout?"
          @confirm="onCloseConfirm"
        />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Confirm from "@/components/Confirm";
import { token } from "@/plugins/db";
import post from "@/plugins/api";

export default {
  name: "Logout",
  data: () => ({ dest: { name: "Home" }, show: false }),
  created() {
    this.show = true;
  },
  methods: {
    xlogout() {
      if (token.isStored()) {
        let t = token.get();
        post("logout", { token: t })
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          })
          .finally(() => {
            token.remove();
            this.$router.push(this.dest);
          });
      } else {
        this.$router.push(this.dest);
      }
    },
    nativeLogout() {
      if (confirm("Are you sure you want to logout?")) {
        this.xlogout();
      } else {
        this.$router.go(-1);
      }
    },
    onCloseConfirm(val) {
      this.show = false;
      if (val === true) {
        this.xlogout();
      } else {
        this.$router.go(-1);
      }
    },
  },
  components: {
    Confirm,
  },
};
</script>
