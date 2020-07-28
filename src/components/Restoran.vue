<template>
    <div class="app container">
        <div class="row">
            <div class="col 10 card red">
                <div class="card-title">
                    <h2>Hey! Bienvenido a #{{ nombrerestoran }}!</h2>
                </div>
                <div class="card body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto 
                    dignissimos quasi eligendi esse, fugit commodi at nihil, hic voluptas totam 
                    voluptates saepe et, dolorum nostrum eaque Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Tempore assumenda veritatis facere.</p>
                    <p>Doloremque eum est ab, voluptatem, optio totam voluptatum porro modi perferendis 
                    eveniet odit ratione velit quia placeat facilis?</p>

                </div>
                <div id="pic">
                    <img src="https://thumbs.dreamstime.com/b/colorful-restaurant-wall-typography-vector-food-bbq-background-motivational-cafe-menu-lettering-chalkboard-166187073.jpg" alt="food" class="graph">
                </div>

                <div class="extra">
                    <router-link :to="{ name:'about', params: {nombrerestoran:nombrerestoran} }">Info</router-link> | <router-link :to="{ name:'reviews', params: {nombrestoran:nombrerestoran} }">Reviews</router-link> | <router-link :to="{ name: 'images', params: {nombrerestoran:nombrerestoran} }">Imágenes</router-link> 
                    <router-view /> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
            name: 'Restoran',
            props: {
                nombrerestoran: String
            }
        }
</script>

<style scoped>
    
h2{
    font-family: Impact, sans-serif;
    color:white;
    font-size: 32px;
    letter-spacing: 0.1em;

}

.pic, .graph{
    display:inline-block;
    margin-top:-420px;
    margin-left:45%;
    max-width: 370px;        
    border-radius: 50px;
    rotate:-4deg; 
}

.card{
    position:relative;
    display:inline-block;
    background-color:transparent;
    color:white;
    border-radius: 100px;
    margin-bottom:5px;
}

.body{
    display:inline-block;
    position:relative;
    width:40%;
    margin-top:40px;
    margin-right:400px;
    border:1px dashed white;
    border-radius: 50px;
    overflow: hidden;
}

.extra{
    display:inline-block;
    position:relative;
    width:80%;
}

* p {
    padding:12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    color:white;
}


</style>