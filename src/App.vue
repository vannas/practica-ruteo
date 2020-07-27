<template>
  <div id="app">
    <img alt="logo" class="logo" src="https://cdn5.f-cdn.com/contestentries/904507/7292376/584980147bd5b_thumb900.jpg">

    <p><router-link to="/"/></p>

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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:khaki;
  margin-bottom:none;
}

.logo{
  max-width: 150px;
  height: auto;
  border-radius: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

* a:hover {
  color:white;
  text-decoration: none;
}
</style>
