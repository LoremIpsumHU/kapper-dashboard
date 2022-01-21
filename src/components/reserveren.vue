<template>
  <div>
    <div class="container">
      <p class="name">{{ name }}</p>
      <p>Kapper: {{ barber_name }}</p>
      <p>{{ start_time }}</p>
      <p>{{ treatment_name }}</p>
      <p v-if="!expand" @click="expand = !expand" class="unselectable">
        Meer...
      </p>
      <div v-if="expand" class="extra">
        <p class="bijz">{{ comment }}</p>
        <div class="row">
          <p class="number">{{ phone }}</p>
          <p class="email">{{ email }}</p>
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
    return {};
  },
  mounted() {
    console.log(process.env.ROOT_API);
  },

  methods: {},
};
</script>

<style scoped>
.container {
  padding: 10px;
  width: 20vw;
  height: 20vh;
  background-color: rgb(212, 212, 212);
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

.row {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
</style>