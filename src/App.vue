<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul>
          <li><a><router-link to="/">Home</router-link></a></li>
        </ul>        
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script> 
export default {
  components:{

  },
  
  data(){
    return{
        
    }
  },
  computed: {

  },
  
}
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
  margin: 0 0;
}

.container {
    display: flex;
    justify-content: center;
    width: 15%;
    height: 100vh;
    border-right: solid #CF4D36;
    position: relative;
}

.container ul {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80%;
    height: 5%;
    position: absolute;
    top: 50vh;
    padding: 0 0;
}

.container ul li {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  list-style: none;
  background-color:#CF4D36;
}

.container ul li a {
  display: flex;
  justify-content: center;
  color: black;
  font-style: bold;
  font-size: 1em;
  text-decoration: none;
  margin-top: 4%;
}
</style>