<template>
  <div>
    <HelloWorld />

    {{ nummer }}
  </div>
</template>

<script>
import HelloWorld from "@/modules/dashboard/components/HelloWorld";

export default {
  name: "Dashboard",
  components: { HelloWorld },
  data() {
    return {
      nummer: 1,
    };
  },
  created() {
    setInterval(() => {
      this.nummer++;
    }, 1000);
  },
};
</script>

<style scoped></style>
