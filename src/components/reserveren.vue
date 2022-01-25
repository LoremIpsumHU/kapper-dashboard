<template>
  <div>
    <div class="container">
      <p class="name">{{ appointment.name }}</p>
      <p>Kapper: {{ appointment.barber_name }}</p>
      <p>{{ formatDate(appointment.start_time) }}</p>
      <p>Behandeling: {{ formatTreatments(appointment.treatments) }}</p>
      <p v-if="!expand" @click="expand = !expand" class="unselectable">
        Meer...
      </p>
      <div v-if="expand" class="extra">
        <p class="bijz">Bijzonderheden: {{ appointment.comment ? appointment.comment : "Geen bijzonderheden." }}</p>
        <div class="col">
          <a :href="`tel:${ appointment.phone }`" class="number">{{ appointment.phone ? appointment.phone : "Geen telefoon nummer." }}</a>
          <a :href="`mailto:${ appointment.email }`" class="email">{{ appointment.email }}</a>
        </div>
        <p @click="expand = !expand" class="unselectable">Minder...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      expand: false,
    };
  },
  props: ["appointment"],

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hour = "" + d.getHours(),
        minute = "" + d.getMinutes();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      if (hour.length < 2) hour = "0" + hour;
      if (minute.length < 2) minute = "0" + minute;

      return [day, month, year].join("-") + " " + [hour, minute].join(":");
    },
    
    formatTreatments(treatments) {
      return treatments.join(', ').replace(/, ([^,]*)$/, ' en $1');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  width: 20vw;
  height: 25vh;
  background-color: rgb(241, 241, 241);
}

.name {
  font-size: 1.5em;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  text-decoration: underline;
  color: #cf4d36;
}

.col {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.col a {
  color: #4a73be;
  text-decoration: none;
}
</style>