import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from '../component/app/admin/Home/Home';
import ListView from '../component/app/admin/list';
import Detail from '../component/app/detail';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/group_list',
            component: () => import('../component/app/admin/ManageArticle/Groups/GroupList')
        },
        {
            path: '/add_group',
            component: () => import('../component/app/admin/ManageArticle/Groups/AddGroup')
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
