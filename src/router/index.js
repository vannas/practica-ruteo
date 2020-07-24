import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '../components/Inicio';
import Ingreso from '../components/Ingreso';
import Categoria from '../components/Categoria';
import Restoran from '../components/Restoran';
import PagNoEncontrada from '../components/PagNoEncontrada';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/login',
            component: Ingreso
        },
        {
            path: '/category/:idcategoria',
            component: Categoria
        },
        {
            path: '/:nombrerestoran',
            component: Restoran
        },
        {
            path: '*',
            component: PagNoEncontrada
        }
    ]
})