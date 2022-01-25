<template>
  <div class="container">
    <div class="img">
      <img src="../assets/jdklogo.svg" alt="jan de kapper logo" />
    </div>
    <div class="button">
      <div class="option" @click="home()">
        <a>Home</a>
      </div>
      <div class="option" @click="reserveren()">
        <a>Reserveringen</a>
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

  methods: {
    reserveren(event) {
      if (event) event.preventDefault();

      this.$store.state.step = 1;
    },

    home(event) {
      if (event) event.preventDefault();

      this.$store.state.step = 2;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 13vw;
  height: 100vh;
  border-right: solid #cf4d36;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.option {
  width: 80%;
  height: 5%;
  margin-top: 10px;
  background-color: #cc5c48;
  border-radius: 10px;
  cursor: pointer;
}

.option a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1em;
  text-decoration: none;
}

img {
  height: 10vh;
  width: 15vw;
}

.img {
  display: flex;
  justify-content: center;
}

@media screen and (max-width:600px) {
  .container {
    width: 27vw;
  }

  .option {
    width: 11ch;
  }

  .option a {
    font-size: 0.8em;
  }
}
</style>