import Vue from 'vue';
import axios from 'axios';
axios.defaults.headers.post['x-csrf-token'] = document.cookie.split('=')[1];

// 添加一个响应拦截器
axios.interceptors.response.use(
    function(res) {
        console.log(res);
        console.log(123456, Vue);
        if (res.data.code === 40001) {
            // console.log(12345678, window.location.pathname);
            window.location = '/admin/login?redirect_url=' + window.location.pathname;
        }
        // 在这里对返回的数据进行处理
        return res;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

// 二手房列表详情
export const login = data => {
    return axios.post('/api/admin/login', data);
};
// 二手房列表详情
export const usedList = () => {
    return axios.get('/api/admin/list');
};
