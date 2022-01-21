<template>
  <div id="app" class="row">
    <sidebar class="fixed"></sidebar>
    <div class="grid">
      <reserveren v-for="item in items" v-bind:key="item"></reserveren>
    </div>
  </div>
</template>

<script>
import reserveren from "./components/reserveren.vue";
import sidebar from "./components/sidebar.vue";

export default {
  components: {
    reserveren,
    sidebar,
  },

  data() {
    return {
      status: "success",
      data: [
        {
          id: 1,
          name: "Bart Hoog",
          email: "bart.hoog@gmail.com",
          phone: "+31648574843",
          start_time: "2022-02-22T13:00:00.000Z",
          comment: "Graag rode kleur.",
          treatment_id: 1,
          treatment_description: "Knip je baard bij.",
          treatment_name: "Baard bijknippen",
          treatment_duration: "1800000",
          treatment_price: "25.50",
          barber_id: 2,
          barber_name: "Alisha",
          barber_email: "alisha@jandekapper.nl",
        },
        {
          id: 1,
          name: "Bart Hoog",
          email: "bart.hoog@gmail.com",
          phone: "+31648574843",
          start_time: "2022-02-22T13:00:00.000Z",
          comment: "Graag rode kleur.",
          treatment_id: 1,
          treatment_description: "Knip je baard bij.",
          treatment_name: "Baard bijknippen",
          treatment_duration: "1800000",
          treatment_price: "25.50",
          barber_id: 1,
          barber_name: "Kevin",
          barber_email: "kevin@jandekapper.nl",
        },
        {
          id: 2,
          name: "Pieter Daak",
          email: "pieter.daak@gmail.com",
          phone: "+31659192849",
          start_time: "2022-02-25T12:00:00.000Z",
          comment: null,
          treatment_id: 1,
          treatment_description: "Knip je baard bij.",
          treatment_name: "Baard bijknippen",
          treatment_duration: "1800000",
          treatment_price: "25.50",
          barber_id: 2,
          barber_name: "Alisha",
          barber_email: "alisha@jandekapper.nl",
        },
        {
          id: 2,
          name: "Pieter Daak",
          email: "pieter.daak@gmail.com",
          phone: "+31659192849",
          start_time: "2022-02-25T12:00:00.000Z",
          comment: null,
          treatment_id: 1,
          treatment_description: "Knip je baard bij.",
          treatment_name: "Baard bijknippen",
          treatment_duration: "1800000",
          treatment_price: "25.50",
          barber_id: 1,
          barber_name: "Kevin",
          barber_email: "kevin@jandekapper.nl",
        },
      ],
    };
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  margin: 0 0;
  padding: 0 0;
}

.row {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  margin-bottom: 20px;
  grid-gap: 10px 10px;
  margin-left: 11vw;
}

.fixed {
  position: fixed;
}
</style>