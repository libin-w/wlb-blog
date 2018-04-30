'use strict';

import { UPDATA_ACTIVE_SIDER_MENU, UPDATA_ACTIVE_HEADER_MENU } from '../../mutation-type';

const mutations = {
    [UPDATA_ACTIVE_SIDER_MENU](state, index) {
        console.log(mutations, index);
        state.siderMenuActive = index;
    },
    [UPDATA_ACTIVE_HEADER_MENU](state, index) {
        console.log(mutations, index);
        state.headerMenuActive = index;
    }
};
export default mutations;
