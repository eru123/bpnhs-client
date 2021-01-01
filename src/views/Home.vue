<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>
<script>
import verifySession from "@/plugins/api/verify-session";
export default {
  name: "Home",
  async beforeCreate() {
    await verifySession(this, { name: "Login" });
  }
};
</script>
