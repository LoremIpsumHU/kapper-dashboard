<template>
  <div class="container">
    <div class="option">
      <a href="https://www.youtube.com/watch?v=iik25wqIuFo">Home</a>
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
* {
  margin: 0 0;
  padding: 0 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 100vh;
  border-right: solid #cf4d36;
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
</style>