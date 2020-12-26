<template>
  <router-view></router-view>
</template>

<script>
import verifySession from "@/plugins/api/verify-session";

export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
