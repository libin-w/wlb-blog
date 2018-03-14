import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from '../../routers/adminRouter';
import admin_app from './admin_app.vue';
import App from 'app';
import Layout from 'component/layout/admin_app';

import '../../asset/css/admin_sty/global.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
App.use(iView);

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
    base: '/app',
    ...admin_app,
    router,
    store
});
