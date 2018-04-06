<template>
    <div class="handle-page-layout-style">
        <div class="layout-sider">
            <h1 class="logo-container">王立斌</h1>
            <el-menu :default-active="defaultActiveMenu" class="sider-menu" background-color="#2a303e" :unique-opened="true" :router="true" text-color="#ffffff" active-text-color="#19a5fc">
                <el-menu-item index="/handle/dashboard">
                    <i class="fas fa-chart-pie menu-item-icon"></i>
                    <span slot="title">Dashboard</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="fas fa-users menu-item-icon"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="/handle/adduser">
                        <i class="fas fa-plus menu-item-icon"></i>
                        <span slot="title">添加用户</span>
                    </el-menu-item>
                    <el-menu-item index="/handle/userlist">
                        <i class="fas fa-list menu-item-icon"></i>
                        <span slot="title">用户列表</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="fab fa-delicious menu-item-icon"></i>
                        <span>博客管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分类管理</template>
                        <el-menu-item index="/handle/addgroup">
                            <i class="fas fa-plus menu-item-icon"></i>
                            <span slot="title">新增分类</span>
                        </el-menu-item>
                        <el-menu-item index="/handle/grouplist">
                            <i class="fas fa-list menu-item-icon"></i>
                            <span slot="title">分类列表</span>
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">文章管理</template>
                        <el-menu-item index="/handle/addarticle">
                            <i class="fas fa-plus menu-item-icon"></i>
                            <span slot="title">新增文章</span>
                        </el-menu-item>
                        <el-menu-item index="/handle/articlelist">
                            <i class="fas fa-list menu-item-icon"></i>
                            <span slot="title">文章列表</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="fas fa-wrench menu-item-icon"></i>
                        <span>设置</span>
                    </template>
                    <el-menu-item index="/handle/basicsetting">
                        <i class="fas fa-cog menu-item-icon"></i>
                        <span slot="title">基本设置</span>
                    </el-menu-item>
                    <el-menu-item index="/handle/userinfo">
                        <i class="fas fa-user-secret menu-item-icon"></i>
                        <span slot="title">修改个人资料</span>
                    </el-menu-item>
                    <el-menu-item index="/handle/setpassword">
                        <i class="fas fa-key menu-item-icon"></i>
                        <span slot="title">修改密码</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="layout-body">
            <el-row class="layout-header">
                <el-col :span="12">

                </el-col>
                <el-col class="right-item" :span="12">
                    <div class="head-portrait">
                        <img src="" alt="">
                    </div>
                    <el-dropdown class="header-handle-dropdown">
                        <span>
                            <span>用户名</span>
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>修改个人资料</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
            <div class="layout-content">
                <div class="breadcrumb-container">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="content-container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">

export default {
    name: 'HandlePageLayout',
    components: {

    },
    data() {
        return {
            defaultActiveMenu: this.$router.currentRoute.path
        };
    },
    created() {
        console.log(this.$router.currentRoute.path);
    },
    beforeRouteUpdate(to, from, next) {
        next();
        this.defaultActiveMenu = to.path;
    },
};
</script>
<style lang="less" scoped>
.handle-page-layout-style {
    .layout-sider {
        .sider-menu {
            border: 0px none;
            .menu-item-icon {
                width: 20px;
            }
        }
    }
}
</style>



