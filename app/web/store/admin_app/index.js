'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import NavMenu from './modules/NavMenu/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        NavMenu
    }
});
