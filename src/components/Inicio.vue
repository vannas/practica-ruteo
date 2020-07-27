<template>
  <div class="container">
    <div class="row">
      <div class="col s12 body">
        <h2>Bienvenido al Portal Gastronómico</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in, nesciunt, 
        quibusdam eius, veritatis ratione illo quo itaque explicabo odit eaque. 
        Iste earum quaerat ea blanditiis molestiae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
        facere qui doloremque et maxime quos optio. Placeat temporibus, nostrum
        Mira un link <a href="#" rel="noopener">Explora</a>.</p>

        <p><img class="girls" src="https://thumbs.dreamstime.com/b/girlfriends-sushi-bar-flat-vector-illustration-young-women-lunch-together-cartoon-characters-girls-eating-fish-noodles-154396045.jpg" alt=""></p>
         
        <span class="new badge red">4</span>
        <span class="new badge blue">4</span>
        
        
        <h5>Menú</h5>
        <ul>
          <li><a class="waves-effect waves-light btn red">Lunes a Viernes</a></li>
          <li><a class="waves-effect waves-light btn orange">Fines de Semana</a></li>
          <li><a class="waves-effect waves-light btn teal">Especiales</a></li>
          <li><a class="waves-effect waves-light btn purple">Happy Hour</a></li>
          <li><a class="waves-effect waves-light btn green">Opciones Veganas</a></li>
        </ul>

      </div>
    </div>
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

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:khaki;
}

h2{
  width:100%;
  font-family: Tahoma, sans-serif;
  font-size: 36px;  
  font-weight: bold;
  color: #f03210;
  margin-top:-4px;
}

h5{
  color: #f03210;
  letter-spacing: 0.2em;
  width:20%;
  margin-left:-10px;
  margin-top:-20px;
  margin-bottom: 30px;
  font-weight: bold;

}

.girls{
  display:inline-block;
  width:200px;
  border-radius: 100px;
  margin:-20px 50px 12px 60px;
  opacity:85%;
}

ul{
  list-style: none;
}

li{
  display: inline-block;
  margin:14px 8px;
  font-size: 1.6em;
  font-family: Tahoma;
  text-transform: capitalize;
  vertical-align: top;
}

.body{
  position:relative;
  display:inline-block;
  width:100%;
  border-radius: 50px;
}

.btn{
  vertical-align: middle;
  text-transform:initial;
  padding-bottom:12px;
  border-radius:24px;
  text-decoration: none;
}

* p {
  margin: 8px 12px 2px 8px;
  text-align: justify;
  display:inline-block;
  width:28%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

* span{
  display:inline-block;
  margin-right:30px;
  width:100px;
}

</style>
