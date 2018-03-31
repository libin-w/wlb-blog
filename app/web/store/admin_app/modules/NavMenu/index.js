'use strict';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
const state = {
    siderMenuActive: '',
    headerMenuData: {
        manage_user: [
            {
                name: '用户列表',
                index: 'user_list',
                path: '/user_list'
            }
        ],
        manage_groups: [
            {
                name: '分组列表',
                index: 'group_list',
                path: '/group_list'
            },
            {
                name: '添加分组',
                index: 'add_group',
                path: '/add_group'
            }
        ],
        manage_article: [
            {
                name: '文章列表',
                index: 'article_list',
                path: '/article_list'
            },
            {
                name: '添加文章',
                index: 'add_article',
                path: '/add_article'
            }
        ],
        setting: [
            {
                name: '个人资料',
                index: 'user_list',
                path: '/'
            },
            {
                name: '修改密码',
                index: 'user_list',
                path: '/'
            }
        ]
    },
    headerMenuActive: ''
};

export default {
    state,
    getters,
    actions,
    mutations
};
