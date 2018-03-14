import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from '../component/app/admin/list';
import Detail from '../component/app/detail';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: [
        {
            path: '/',
            component: ListView
        },
        {
            path: '/list',
            component: ListView
        },
        {
            path: '/detail/:id',
            component: () => import('../component/app/detail')
            //   component: Detail
        }
    ]
});

export default router;
