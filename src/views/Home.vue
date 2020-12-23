<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import {token} from "@/plugins/db";
export default {
  name: "Home",
  data: () =>({
    token: false
  }),
  created(){
    this.token = token.state(this);
  }
};
</script>
