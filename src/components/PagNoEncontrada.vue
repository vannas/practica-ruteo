<template>
    <div class="app container">
    <div class="card">
        <h1>Oh no! :(</h1>
        <div class="card-body bg red">
            <span> <i class="material-icons prefix">cancel</i>  <i class="material-icons prefix">sentiment_very_dissatisfied</i></span>
            <p>Has entrado al lugar equivocado.</p>
            <p>Encuentra tu camino de vuelta <router-link to="/">a casa</router-link></p>
        </div>
    </div>
    </div>
</template>

<script>
 export default {
            name: 'PagNoEncontrada',
            props: {
                error: String
            }
        }
</script>

<style scoped>
    .app{
        background-color: khaki;
    }

    .card-body{
        width:80%;
        margin:0x auto;
        min-height: 500px;
    }

    span{
        font-size: large;
    }
</style>