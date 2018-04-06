import Vue from 'vue';

import VueRouter from 'vue-router';

import LoginPage from '../component/app/admin/LoginPage/LoginPage';
import HandlePageLayout from '../component/app/admin/HandlePage/HandlePageLayout';
import Dashboard from '../component/app/admin/HandlePage/Dashboard/Dashboard';
import AddUser from '../component/app/admin/HandlePage/ManageUser/AddUser';
import UserList from '../component/app/admin/HandlePage/ManageUser/UserList';
import AddArticle from '../component/app/admin/HandlePage/ManageBlog/Article/AddArticle';
import ArticleList from '../component/app/admin/HandlePage/ManageBlog/Article/ArticleList';
import AddGroup from '../component/app/admin/HandlePage/ManageBlog/Groups/AddGroup';
import GroupList from '../component/app/admin/HandlePage/ManageBlog/Groups/GroupList';
import BasicSetting from '../component/app/admin/HandlePage/Setting/BasicSetting';
import UserInfo from '../component/app/admin/HandlePage/Setting/UserInfo';
import SetPassword from '../component/app/admin/HandlePage/Setting/SetPassword';

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
