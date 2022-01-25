<template>
  <div id="app" class="row">
    <sidebar class="fixed"></sidebar>
    <div>
      <div class="grid" v-show="step == 1" >
        <reserveren v-for="id in this.$store.state.data" :appointment="id" v-bind:key="id"></reserveren>        
      </div>
      <home v-show="step == 2"></home>
    </div>
  </div>
</template>

<script>
import reserveren from "./components/reserveren.vue";
import home from "./components/home.vue"
import sidebar from "./components/sidebar.vue";
import axios from 'axios';

export default {
  components: {
    reserveren,
    sidebar,
    home,
  },

  data() {
    return {
    }
  },

  beforeMount() {
      this.getData()
    },

  computed: {
    step() {
      return this.$store.state.step
    }
  },

  methods: {
    getData() {
      axios.get('https://dev-api.jandekapper.nl/appointments',)
      .then(res => {
        this.$store.state.data = res.data.data.reverse()
        this.merge()
      })
      .catch((err) => {
        alert('Er is iets fout gegaan, probeer het later opnieuw.')
      });
    },

    merge() {
      let arr = [];
      let items = this.$store.state.data

      for (let i in items) {
          let seen = false;
          for (let a = 0; a<arr.length; a++) {
              if (items[i].id === arr[a].id) {
                  let n = arr[a];
                  n.treatments.push(items[i].treatment_name);
                  arr[a] = n;
                  seen = true;
              }
          }
          
          if(!seen) {
            let insertion = items[i];
            let treat_arr = [items[i].treatment_name];
            insertion['treatments'] = treat_arr;
            arr.push(insertion);
          }
          
      }
      this.$store.state.data = arr
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  margin: 0 0;
  padding: 0 0;
}

.row {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  margin-bottom: 20px;
  grid-gap: 10px 10px;
  margin-left: 14vw;
}

.fixed {
  position: fixed;
}

@media screen and (max-width:600px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    width: 70vw;
    margin-left: 30vw;
  }
}
</style>