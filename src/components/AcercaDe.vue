<template>
    <div class="app container">
        <div class="row">
            <h1><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i><i class="material-icons md-48">face</i><i class="material-icons circle red">local_dining</i></h1>
            <h2>{{ nombrerestoran }}!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto dignissimos quasi</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda veritatis facere.</p>
            <p>Doloremque eum est ab, voluptatem, optio totam voluptatum porro modi perferendis eveniet odit ratione velit quia placeat facilis?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto dignissimos quasi </p>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'AcercaDe',
    props: {
        nombrerestoran:String
    }
    }
</script>

<style scoped>

    .row{
        margin-top:5px;
    }

    h1 {
        display:block;
        font-size:48px;
        margin:-10px;
    }
    h2{
        display:inline-block;
        font-family: Impact, sans-serif;
        color:white;
        font-size: 32px;
        letter-spacing: 5px;
        
    }

    * p {
        display:inline-block;
        max-width:40%;
        margin-left:20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 12px;
        color:white;
    }

    .card{
        position:relative;
        display:inline-block;
        background-color:transparent;
        border-radius: 100px;
        margin-bottom: 10px;
        color:white;
    }

    .body{
        display:inline-block;
        width:70%;
        border-radius: 50px;
        overflow: hidden;
    }
</style>