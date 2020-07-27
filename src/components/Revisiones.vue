<template>
    <div class="app container">
        <div class="row">
            <ul class="collection">
                <li class="collection-item avatar">
                <i class="material-icons circle green">face</i>
                <span class="title">Title</span>
                <p>Libero sequi quos quia ipsa accusamus minus <br>
                recusandae aliquam aperiam ad saepe officia nobis.</p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i></a>
                </li>
                <li class="collection-item avatar">
                <i class="material-icons circle red">face</i>
                <span class="title">Title</span>
                <p>Brilliant!</p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i></a>
                </li>
                <li class="collection-item avatar">
                <i class="material-icons circle green">face</i>
                <span class="title">Title</span>
                <p>Lorem ipsum dolor sit amet! Corrallis sea. <br>Saepe corrupti debitis, expedita tempore ipsa illum ut quasi. Unde.</p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i></a>
                </li>
                <li class="collection-item avatar">
                <i class="material-icons circle red">face</i>
                <span class="title">Title</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Saepe corrupti debitis, expedita tempore ipsa illum ut quasi. Unde.</p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i><i class="material-icons">grade</i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
 export default {
            name: 'Revisiones'
        }
</script>

<style scoped>
    h2{
    font-family: Impact, sans-serif;
    color:white;
    font-size: 32px;
    letter-spacing: 0.1em;
    transform: translate(6px, 23px) rotate(-1deg); 
}

.card{
    position:relative;
    display:block;
    background-color:transparent;
    border-radius: 100px;
    margin-bottom: 40px;
}

.body{
    display:inline-flexbox;
    position:relative;
    width:60%;
    margin-top:10px;
    margin-bottom: -60px;
    border:1px dashed white;
    border-radius: 50px;
    overflow: hidden;
}


* p {
    color:slategrey;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    width:80%;
}
</style>