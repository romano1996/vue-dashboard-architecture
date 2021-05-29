<template>
  <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> <br>
  <router-link :to="{ name: 'dashboard-page-two' }">Page Two</router-link>

  <div>
    <router-view name="one"></router-view>
    <router-view name="two"></router-view>
    <router-view name="three"></router-view>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style scoped>

</style>