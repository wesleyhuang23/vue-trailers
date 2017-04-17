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
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 46px;
  height: 46px;
}
::-webkit-scrollbar-thumb {
  background: #000000;
  border: 79px solid #373737;
  border-radius: 24px;
}
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #464448;
  border: 57px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #000000;
}
::-webkit-scrollbar-track:active {
  background: #000000;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
