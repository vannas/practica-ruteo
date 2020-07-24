<template>
    <div class="app">
    <h1>Página de {{ $route.params.nombrerestoran }}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto dignissimos quasi </p>
    <p>eligendi esse, fugit commodi at nihil, hic voluptas totam voluptates saepe et, dolorum nostrum eaque </p>
    <p>deleniti amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda veritatis facere.</p> <p>Doloremque eum est ab, voluptatem, optio totam voluptatum porro modi perferendis eveniet odit ratione velit quia placeat facilis?</p>
    </div>
</template>

<script>
 export default {
            name: 'Restoran'
        }
</script>

<style scoped>
    .app, h1{
        background-color: khaki;
        color:#f03210;
    }
</style>