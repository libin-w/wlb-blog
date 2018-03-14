import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from '../../routers/userRouter';
import user_app from './user_app.vue';
import App from 'app';
import Layout from 'component/layout/show_app';

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
    base: '/app',
    ...user_app,
    router,
    store
});
