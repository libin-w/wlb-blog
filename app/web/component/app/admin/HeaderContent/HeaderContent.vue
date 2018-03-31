<template>
    <el-row class="header-content-container">
        <el-col v-if="$store.state.NavMenu.siderMenuActive" :span="16">
            <el-menu :default-active="$store.state.NavMenu.headerMenuActive" class="row-nav-menu" mode="horizontal" @select="changeHeaderMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item v-for="(item, index) in $store.state.NavMenu.headerMenuData[$store.state.NavMenu.siderMenuActive]" :key="index" :index="item.index">{{ item.name }}</el-menu-item>
            </el-menu>
        </el-col>
        <el-col v-if="!$store.state.NavMenu.siderMenuActive" :span="16">
            sdfg
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
</template>
<script type="text/babel">
import * as Type from '../../../../store/admin_app/mutation-type';
export default {
    name: 'HeaderContent',
    data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {
        changeHeaderMenu(index) {
            console.log(index);
            this.$store.commit(Type.UPDATA_ACTIVE_HEADER_MENU, index);
            
        }
    }
};

</script>
<style lang="less" scoped>
.header-content-container {
    .row-nav-menu {
        border: 0px none;
    }
}
</style>


