<template>
  <div id="app">
    <nav>
      <div class="navbar">
        <ul>
          <li><a><router-link to="/">Producten</router-link></a></li>
          <li><a><router-link to="/reserveren">Reserveren</router-link></a></li>
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

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar{
    flex: 1;
    text-align: right;
    position: fixed;
    top: 5px;
    left: 10px;
    z-index: 1000000;
}

.navbar ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 50px;
    position: relative;
}

.navbar ul li a{
    color: #CF4D36;
    text-decoration: none;
    font-size: 35px;
}
</style>