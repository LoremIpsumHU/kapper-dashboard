<template>
  <div class="all">
    <div class="welkom center">
      <p>{{ hallo() }}, Jan</p>
    </div>
    <div class="center">
      <div class="container" @click="reserveren()">
        <div>
          <img src="../assets/jdklogo.svg" alt="jan de kapper logo" />
        </div>
        <p class="innertext">Reserveringen</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    reserveren(event) {
      if (event) event.preventDefault();

      this.$store.state.step = 1;
    },

    hallo() {
      var data = [
          [22, "Nog laat bezig"],
          [18, "Goedenavond"],
          [12, "Goedemiddag"],
          [5, "Goedemorgen"],
          [0, "Goedenacht"],
        ],
        hr = new Date().getHours();
      for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0]) {
          return data[i][1];
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  width: 87vw;
  margin-left: 13vw;
}

.welkom {
  align-items: center;
  height: 30vh;
  font-size: 3.2em;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 20vw;
  height: 20vh;
  background: rgb(241, 241, 241);
  margin: 0 0;
  cursor: pointer;
}

.innertext {
  font-size: 1.5em;
}

img {
  width: 100%;
  height: 9vh;
  margin-bottom: 10px;
}
</style>