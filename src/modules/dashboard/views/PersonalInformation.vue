<template>
  <div v-if="information !== null">
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
import { FetchPersonalInformation } from "@/modules/dashboard/services/personal_information_service";

export default {
  name: "PersonalInformation",
  data() {
    return {
      information: null,
    };
  },
  created() {
    FetchPersonalInformation().then((response) => {
      // Iknow response.data.results[0] sucks. Just playing with architecture..
      this.information = response.data.results[0];
    });
  },
};
</script>

<style scoped></style>
