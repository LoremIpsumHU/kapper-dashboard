<template>
  <div id="app" class="row">
    <sidebar></sidebar>
    <reserveren></reserveren>
  </div>
</template>

<script> 
import reserveren from "./components/reserveren.vue"
import sidebar from "./components/sidebar.vue"

export default {
  components:{
    reserveren,
    sidebar,
  },
  
  data(){
    return{
        
    }
  },
}
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
  margin: 0 0;
  padding: 0 0;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>