<template>
  <div>
    <h1>Dashboard layout</h1>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style scoped>

</style>