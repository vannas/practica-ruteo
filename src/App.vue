<template>
  <div id="app">
    <img alt="logo" class="logo" src="https://i.ytimg.com/vi/qheRsAwDvCo/maxresdefault.jpg">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:khaki;
  margin-top: 60px;
}

.logo{
  max-width: 300px;
  height: auto;
  border-radius: 100%;
}
</style>
