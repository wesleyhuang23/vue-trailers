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

<style lang="scss">
$vueGreen: #3AB882;
*{
  margin: 0;
  background-color: black;
}
#app {
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $vueGreen;
  background-color: black;
}
</style>
