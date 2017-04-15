<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
}
#app {
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  text-align: center;
  height: 100vh;
  background-color: black;
}
</style>
