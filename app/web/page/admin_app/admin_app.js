import { sync } from 'vuex-router-sync';
import store from 'store/admin_app';
import router from '../../routers/adminRouter';
import admin_app from './admin_app.vue';
import App from 'app';
import AdminLayout from 'component/layout/admin_app';

import '../../asset/css/admin_sty/global.css';


App.component(AdminLayout.name, AdminLayout);

sync(store, router);

export default App.init({
    base: '/app',
    ...admin_app,
    router,
    store
});
