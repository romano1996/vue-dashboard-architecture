<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item.to">
        <router-link :to="item.to">{{ item.label }}</router-link> <br>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
