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
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { token } from "@/plugins/db";
import { post } from "@/plugins/api";

export default {
  name: "Logout",
  data: () => ({ dest: { name: "Home" } }),
  created() {
    if (confirm("Are you sure you want to logout?")) {
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
    } else {
      this.$router.go(-1);
    }
  },
};
</script>
