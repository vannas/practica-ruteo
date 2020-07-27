<template>
    <div class="app">
      <div class="row">
      <div class="login red">
      <h3>Login</h3>
      
      <form class="">      
        <div class="input-field col s4">
        <i class="material-icons prefix">account_circle</i>
        <input id="username" type="text" class="validate">
        <label for="username">Nombre de usuario</label>
        </div>

        <div class="input-field col s4">
        <i class="material-icons prefix">contact_mail</i>
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>
        <span class="helper-text" data-error="wrong" data-success="right">Asegúrate de ingresar un e-mail registrado</span>
        </div>

        <div class="input-field col s4">
        <i class="material-icons prefix">https</i>
        <input id="password" type="password" class="validate">
        <label for="password">Contraseña</label>
        </div>
      </form>
      <a class="btn light-blue darken-2 waves-effect waves-light">Entrar</a>      
      </div>
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
    width:100%;
    height:100%;
  }

  .login{
    color:white;
    border-radius: 80px;
    width:80%;
    margin:0px auto;
    margin-bottom:160px;
  }

  h3 {
    padding:10px;
  }

  .btn{
    margin:20px;
  }

</style>