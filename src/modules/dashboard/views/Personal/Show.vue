<template>
  <div>
    <h1>Personal information</h1>
    <p>This information is collected & rendered by the Personal/Show view inside the dashboard module.</p>

    <div>
      <label for="firstname">Firstname</label> <br />
      <input
        type="text"
        :value="information.name.first"
        id="firstname"
        readonly
      /><br />
    </div>
    <div>
      <label for="middle">Middle</label> <br />
      <input
        type="text"
        :value="information.name.middle"
        id="middle"
        readonly
      /><br />
    </div>
    <div>
      <label for="lastname">Lastname</label> <br />
      <input
        type="text"
        :value="information.name.last"
        id="lastname"
        readonly
      /><br />
    </div>
    <div>
      <label for="response">Full json from api</label> <br />
      <textarea
        id="response"
        :value="JSON.stringify(information)"
        rows="3"
      ></textarea
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  computed: {
    information () {
      return this.$store.getters["user/get"];
    },
  },
};
</script>

<style scoped></style>
