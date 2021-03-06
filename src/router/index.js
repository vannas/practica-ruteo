import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '../components/Inicio';
import Ingreso from '../components/Ingreso';
import Categoria from '../components/Categoria';
import Restoran from '../components/Restoran';
import AcercaDe from '../components/AcercaDe';
import Imagenes from '../components/Imagenes';
import Revisiones from '../components/Revisiones';
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
            component: Categoria,
            name: 'cat',
            props: true
        },
        {
            path: '/:nombrerestoran/',
            component: Restoran,
            props: true,
            children: [
                {
                    path:'',
                    component: AcercaDe,
                    name: 'about',
                    props: true

                },
                {
                    path:'reviews',
                    component: Revisiones,
                    name: 'reviews',
                    props: true
                },
                {
                    path:'images',
                    component: Imagenes,
                    name: 'images',
                    props: true
                }
            ]
        },
        {
            path: '*',
            component: PagNoEncontrada,
            name: 'error'
        }
    ]
})