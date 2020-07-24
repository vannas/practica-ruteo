<template>
    <div class="app">
    
    <h1>Login</h1>
    <p><input type="text" name="username" placeholder="Username" /></p>
    <p><input type="password" name="password" placeholder="Password" /></p>
    <button class="button">Login</button>
    
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