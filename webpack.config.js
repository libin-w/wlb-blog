'use strict';
const path = require('path');
module.exports = {
    egg: true,
    framework: 'vue',
    entry: {
        'user_app/user_app': 'app/web/page/user_app/user_app.js',
        'admin_app/admin_app': 'app/web/page/admin_app/admin_app.js'
    },
    alias: {
        app: 'app/web/framework/vue/app.js',
        asset: 'app/web/asset',
        component: 'app/web/component',
        framework: 'app/web/framework',
        store: 'app/web/store',
        vue: 'vue/dist/vue.esm.js'
    },
    externals: {
        vue: 'Vue',
        axios: 'axios',
        ElementUI: 'element-ui'
    },
    dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
    loaders: {},
    plugins: {},
    done() {}
};
