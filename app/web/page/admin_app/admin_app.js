import { sync } from 'vuex-router-sync';
import store from 'store/admin_app';
import router from '../../routers/adminRouter';
import admin_app from './admin_app.vue';
import App from 'app';
import AdminLayout from 'component/layout/admin_app';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '../../asset/css/admin_sty/global.css';
import '../../asset/css/fontawesome-all.min.css';

App.component(AdminLayout.name, AdminLayout);

App.use(ElementUI);

sync(store, router);

export default App.init({
    base: '/app',
    ...admin_app,
    router,
    store
});
