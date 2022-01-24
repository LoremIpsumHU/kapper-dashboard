<template>
  <div class="container">
    <div class="img">
      <img src="../assets/jdklogo.svg" alt="jan de kapper logo">
    </div>
    <div class="button">
      <div class="option">
        <a>Home</a>
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
  width: 100%;
  height: 100vh;
}

.option {
  width: 80%;
  height: 5%;
  background-color: #cf4d36;
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
  width: 15vh;
}

.img {
  display: flex;
  justify-content: center;
}
</style>