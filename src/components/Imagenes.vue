<template>
    <div class="app container">
    <h3>{{ nombrerestoran }} Te Ofrece:</h3>
    <div class="card medium body">
      <div class="card-image">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*">
          
          <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>Especiales diarios</p>
        </div>
    </div>

    <div class="card medium body">
        <div class="card-image">
            <img src="https://www.eatright.org/-/media/eatrightimages/food/nutrition/vegetarianandspecialdiets/vegetarianism-basic-facts-878734076.jpg">
            <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
            <p>Opciones veganas y vegetarianas</p>
        </div>      
    </div>

    <div class="card medium body">
      <div class="card-image">
          <img src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg">
          
          <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>Delivery hasta 23:00hrs</p>
        </div>
    </div>

    </div>
</template>

<script>
 export default {
            name: 'Imagenes',
            props: {
                nombrerestoran:String
            }
        }
</script>

<style scoped>
    h3{
        font-family: Impact;
        letter-spacing: 0.1em;
        margin-top:20px;
        margin-left:-260px;
    }

    .card{
        display:inline-block;
        background-color:transparent;
        color:white;
        border-radius: 20px;
        vertical-align: top;
        line-height: 0.9em;
        max-width: 25%;
        max-height: 220px;
        margin-left:40px;
    }

    .card-image img{
        max-height:160px;
        border-radius: 20px;
        overflow:hidden;
    }

    .btn-floating {
        z-index:100;
        overflow:visible;
    }

    p{
        color:white;
        line-height: 1em;
    }

</style>