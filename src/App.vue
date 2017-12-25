<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <router-view/>
  </div>
</template>

<script>
import Loading from './components/Loading'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
    'loading'
  ]),
  components:{
    Loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #ccc;
}
ul,li,ol,h1,h2,h3,h4,h5,h6,div,p {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
}
</style>
