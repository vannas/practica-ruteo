<template>
  <div id="app">
    <img alt="logo" class="logo" src="https://cdn5.f-cdn.com/contestentries/904507/7292376/584980147bd5b_thumb900.jpg">

    <div id="nav">
      <p>
        <router-link to="/">Home</router-link> <i class="material-icons prefix">gesture</i> 
        <router-link to="/login">Login</router-link> <i class="material-icons prefix">gesture</i> 
        <router-link to="{ path: `/${nombrerestoran}` }">Categoria</router-link> <i class="material-icons prefix">gesture</i> 
        <router-link to="/:nombrerestoran">Restaurant</router-link>
      </p>
    </div>

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
.nav{
  border:1px solid #f03210;
}
.logo{
  max-width: 150px;
  height: auto;
  border-radius: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

* a:hover {
  color:white;
  text-decoration: none;
}

p {
  display:inline-block;
  margin:10px 20px 12px 0px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  color: #f03210;
  vertical-align: top;
}
</style>
