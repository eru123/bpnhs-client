<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  created() {
    fetch("http://localhost:8080")
      .then(e => console.log(e))
      .catch(e => console.log("EEEE:", e));
  }
};
</script>
