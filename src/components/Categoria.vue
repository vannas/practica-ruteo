<template>
    <div class="app container s10">
    <h1>Explora</h1>
    <p>Bienvenido a categoría #{{ idcategoria }}</p>
    </div>
</template>

<script>
 export default {
    name: 'Categoria',
    props: {
        idcategoria: String
    }
}
</script>

<style scoped>
    .app{
        background-color:khaki;
        margin: 0 auto;
        min-height:500px ;
    }
    h1,a{
        color: #f03210;
    }
</style>