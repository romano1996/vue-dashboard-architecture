<template>
  <Navigation
    :items="[
      {to: { name: 'dashboard' }, label: 'Dashboard' },
      {to: { name: 'dashboard-page-two' }, label: 'Dashboard page two' },
    ]"
  />

  <div>
    <router-view name="one"></router-view>
    <router-view name="two"></router-view>
    <router-view name="three"></router-view>
  </div>
</template>

<script>
import Navigation from "@/modules/navigation/views/Navigation";
export default {
  name: "dashboard",
  components: { Navigation }
};
</script>

<style scoped>

</style>