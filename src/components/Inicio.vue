<template>
  <div class="container">
    <h1>Bienvenido al Inicio</h1>
    <p>
      Bla Bla, mira un link <a href="#" rel="noopener">Explora</a>.
    </p>
    <h3>Proyectos</h3>
        <ul><li><a href="#" rel="noopener">Map</a></li></ul>
    <h3>Socios</h3>
    <ul>
      <li><a href="#" rel="noopener">Parrillada</a></li>
      <li><a href="#" rel="noopener">Sushi</a></li>
      <li><a href="#" rel="noopener">Pizza</a></li>
      <li><a href="#" rel="noopener">Burger King</a></li>
      <li><a href="#" rel="noopener">Vegan</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f03210;
}
.app{
    background-color: khaki;
    color:#f03210;
    }
</style>
