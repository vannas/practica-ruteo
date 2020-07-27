<template>
    <div class="app container">
    <div class="card">
        <h1>Oh no! :(</h1>
        <div class="card-body bg red">
            <p>Has entrado al lugar equivocado.</p>
            <p>Encuentra tu camino de vuelta <a href="@/components/Inicio">a casa</a></p>
        </div>
    </div>
    </div>
</template>

<script>
 export default {
            name: 'PagNoEncontrada'
        }
</script>

<style scoped>
    .app{
        background-color: khaki;
        
    }
</style>