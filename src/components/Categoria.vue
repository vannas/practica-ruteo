<template>
    <div class="app">
    <h1>Explora</h1>
    <p>Bienvenido a categoría {{ $route.params.idcategoria }}</p>
    </div>
</template>

<script>
 export default {
            name: 'Categoria'
        }
</script>

<style scoped>
    .app{
        background-color:khaki;
    }
    h1,a{
        color: #f03210;
    }
</style>