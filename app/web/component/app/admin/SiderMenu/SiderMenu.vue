<template>
    <div class="sider-menu-container">

        <el-menu :default-active="$store.state.NavMenu.siderMenuActive" class="el-menu-vertical-demo" @select="changeSiderMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="manage_user">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="manage_groups">
                <i class="el-icon-document"></i>
                <span slot="title">分组管理</span>
            </el-menu-item>
            <el-menu-item index="manage_article">
                <i class="el-icon-setting"></i>
                <span slot="title">文章管理</span>
            </el-menu-item>
            <el-menu-item index="setting">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script type="text/babel">
import * as Type from '../../../../store/admin_app/mutation-type';
export default {
    name: 'SiderMenu',
    data() {
        return {

        };
    },
    methods: {
        changeSiderMenu(index) {
            this.$store.commit(Type.UPDATA_ACTIVE_SIDER_MENU, index);
            console.log(111, index);
            console.log(222, this.$store.state.NavMenu.headerMenuData);
            this.$router.push(this.$store.state.NavMenu.headerMenuData[index][0].path);

            this.$store.commit(Type.UPDATA_ACTIVE_HEADER_MENU, this.$store.state.NavMenu.headerMenuData[index][0].index);

        },

    },
    computed: {

    },
    watch: {

    },
    created() {
        console.log(this.$store.state.NavMenu.siderMenuActive);
    }

};

</script>
<style lang="less" scoped>
.sider-menu-container {
    & > .logo-container {
        height: 64px;
        background-color: #1c2438;
    }
}
</style>


