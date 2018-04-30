import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from '../../routers/userRouter';
import user_app from './user_app.vue';
import App from 'app';
import Layout from 'component/layout/show_app';

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.headers.common.Authorization = '11111AUTH_TOKEN';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加响应拦截器
axios.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        console.log(response);
        return response;
    },
    function(error) {
        // 对响应错误做点什么
        console.log(error);
        return Promise.reject(error);
    }
);

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
    base: '/app',
    ...user_app,
    router,
    store
});
