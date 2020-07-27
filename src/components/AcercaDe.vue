<template>
    <div class="app container">
        <div class="row">
            <h1><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i></h1>
            <h2>{{ $route.params.nombrerestoran }}!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto dignissimos quasi</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda veritatis facere.</p>
            <p>Doloremque eum est ab, voluptatem, optio totam voluptatum porro modi perferendis eveniet odit ratione velit quia placeat facilis?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto dignissimos quasi </p>
        </div>
    </div>
</template>

<script>
 export default {
            name: 'AcercaDe'
        }
</script>

<style scoped>

    h1 {
        display:inline-block;
        font-size:48px;
        transform: translate(-80px, -60px) rotate(-20deg); 
        margin:-60px;
    }
    h2{
        display:inline-block;
        font-family: Impact, sans-serif;
        color:white;
        font-size: 32px;
        letter-spacing: 5px;
        margin:-100px, -12px;
        transform: translate(-80px, -50px) rotate(-20deg); 
    }

    * p {
        display:inline-block;
        margin: 2%;
        max-width:35%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 12px;
    }

    .card{
        position:relative;
        display:inline-block;
        background-color:transparent;
        border-radius: 100px;
        margin-bottom: 20px;
        color:white;
    }

    .body{
        display:inline-block;
        width:70%;
        margin-bottom: -60px;
        border-radius: 50px;
        overflow: hidden;
    }
</style>