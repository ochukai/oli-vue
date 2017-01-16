<template>
  <div id="apps">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <mt-button @click.native="startHacking">Let's do it</mt-button>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/list">List</router-link></li>
      <li><router-link to="/detail">Detail</router-link></li>
      <li><router-link to="/404">404</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
  name: 'main',
  data () {
    return {
      msg: 'I am Oliver~'
    }
  },
  methods: {
    startHacking () {
      Toast('It Works!')
    }
  }
}

</script>

<style lang="less">
#apps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 20px;
  }
}

a {
  color: #42b983;
}
</style>
