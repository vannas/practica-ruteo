<template>
    <div class="app container">
        <div class="row">
            <div class="col 10 card red">
                <div class="card-title">
                    <h2>Hey! Bienvenido a {{ $route.params.nombrerestoran }}!</h2>
                </div>
                <div class="card body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo architecto 
                    dignissimos quasi eligendi esse, fugit commodi at nihil, hic voluptas totam 
                    voluptates saepe et, dolorum nostrum eaque Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Tempore assumenda veritatis facere.</p>
                    <p>Doloremque eum est ab, voluptatem, optio totam voluptatum porro modi perferendis 
                    eveniet odit ratione velit quia placeat facilis?</p>

                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/colorful-restaurant-wall-typography-vector-food-bbq-background-motivational-cafe-menu-lettering-chalkboard-166187073.jpg" alt="food" class="graph">
                </div>

                <div class="extra">
                    <router-view /> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
            name: 'Restoran'
        }
</script>

<style scoped>
    
h2{
    font-family: Impact, sans-serif;
    color:white;
    font-size: 32px;
    letter-spacing: 0.1em;
    transform: translate(6px, 23px);
}

.card{
    position:relative;
    display:block;
    background-color:transparent;
    color:white;
    border-radius: 100px;
    margin-bottom: 40px;
}

.body{
    display:inline-flexbox;
    position:relative;
    width:60%;
    margin-top:60px;
    margin-bottom: -60px;
    border:1px dashed white;
    border-radius: 50px;
    overflow: hidden;
}

.extra{
    display:inline-block;
    position:relative;
    margin: 0 auto;
    width:80%;
    margin-bottom: 25px;
}

* p {
    margin:20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
}

.graph{
    display:inline-block;
    position:relative;
    max-width: 400px;        
    border-radius: 50px;
    transform: translate(250px, -40px) rotate(-16deg); 
    margin-bottom:20px;
}


</style>