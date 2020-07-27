<template>
    <div class="app">
    
    <h1>Login</h1>
    <p><input type="text" name="username" placeholder="Username" /></p>
    <p><input type="password" name="password" placeholder="Password" /></p>
    
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">account_circle</i>
        <input id="username" type="text" class="validate">
        <label for="username">Nombre de usuario</label>
        </div>

        <div class="input-field col s12">
        <i class="material-icons prefix">contact_mail</i>
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>
        <span class="helper-text" data-error="wrong" data-success="right">Asegúrate de ingresar un e-mail registrado</span>
        </div>

        <div class="input-field col s12">
        <i class="material-icons prefix">https</i>
        <input id="password" type="password" class="validate">
        <label for="password">Contraseña</label>
        </div>

        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
    </form>
  </div>
        
      
    
    </div>
</template>

<script>
 export default {
    name: 'Ingreso',
        
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    }
 }
</script>

<style scoped>
    .app{
        background-color: khaki;
        color:#f03210;
    }
</style>