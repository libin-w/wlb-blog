import Vue from 'vue';

import VueRouter from 'vue-router';

import LoginPage from '../page/admin_app/LoginPage/LoginPage';
import HandlePageLayout from '../page/admin_app/HandlePage/HandlePageLayout';
import Dashboard from '../page/admin_app/HandlePage/Dashboard/Dashboard';
import AddUser from '../page/admin_app/HandlePage/ManageUser/AddUser';
import UserList from '../page/admin_app/HandlePage/ManageUser/UserList';
import AddArticle from '../page/admin_app/HandlePage/ManageBlog/Article/AddArticle';
import ArticleList from '../page/admin_app/HandlePage/ManageBlog/Article/ArticleList';
import AddGroup from '../page/admin_app/HandlePage/ManageBlog/Groups/AddGroup';
import GroupList from '../page/admin_app/HandlePage/ManageBlog/Groups/GroupList';
import BasicSetting from '../page/admin_app/HandlePage/Setting/BasicSetting';
import UserInfo from '../page/admin_app/HandlePage/Setting/UserInfo';
import SetPassword from '../page/admin_app/HandlePage/Setting/SetPassword';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: [
        {
            path: '/',
            redirect: 'handle'
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/handle',
            component: HandlePageLayout,
            children: [
                {
                    path: '/handle',
                    redirect: 'dashboard'
                },
                {
                    path: '/handle/dashboard',
                    component: Dashboard
                },
                {
                    path: '/handle/adduser',
                    component: AddUser
                },
                {
                    path: '/handle/userlist',
                    component: UserList
                },
                {
                    path: '/handle/addarticle',
                    component: AddArticle
                },
                {
                    path: '/handle/articlelist',
                    component: ArticleList
                },
                {
                    path: '/handle/addgroup',
                    component: AddGroup
                },
                {
                    path: '/handle/grouplist',
                    component: GroupList
                },
                {
                    path: '/handle/basicsetting',
                    component: BasicSetting
                },
                {
                    path: '/handle/userinfo',
                    component: UserInfo
                },
                {
                    path: '/handle/setpassword',
                    component: SetPassword
                }
            ]
        }
    ]
});

export default router;
