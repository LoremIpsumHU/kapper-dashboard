<template>
    <div class="container">
        <div class="option">
            <a href="https://www.youtube.com/watch?v=iik25wqIuFo">Home</a>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },

    data(){
        return {

        }
    }
}
</script>

<style scoped>
* {
    margin: 0 0;
    padding: 0 0;
}

.container {
    display: flex;
    justify-content: center;
    width: 15%;
    height: 100vh;
    border-right: solid #CF4D36;
    position: relative;
}

.option {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80%;
    height: 5%;
    position: absolute;
    top: 50vh;
    background-color:#CF4D36;
    border-radius: 10px;
    cursor: pointer;
}

.option a {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1em;
  text-decoration: none;
  position: absolute;
  top: 1.2vh;
}
</style>