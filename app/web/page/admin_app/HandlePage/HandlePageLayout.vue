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
                        <span slot="title">账号信息</span>
                    </el-menu-item>
                    <el-menu-item index="/handle/setpassword">
                        <i class="fas fa-key menu-item-icon"></i>
                        <span slot="title">安全设置</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="layout-body">
            <el-row class="layout-header">
                <el-col :span="14">

                </el-col>
                <el-col class="right-item" :span="10">

                    <div class="handle-icon-container">
                        <div class="between-space"></div>
                        <el-badge :value="12" :max="9" class="handle-icon-item handle-is-active">
                            <i @click="toggleSiderMessage()" class="fas fa-bell"></i>
                        </el-badge>

                        <div class="between-space"></div>

                        <transition name="sider-message-fade">
                            <div v-show="siderMessageIsShow" class="sider-message-container">

                                <div class="sider-message-title">
                                    <span>消息中心</span>
                                    <i @click="toggleSiderMessage()" class="el-icon-close"></i>
                                </div>
                                <div class="sider-message-content">

                                </div>

                            </div>
                        </transition>

                    </div>

                    <div class="user-info">
                        <div class="head-portrait">
                            <img src="" alt="">
                        </div>
                        <span class="user-name">用名</span>
                        <i class="el-icon-caret-bottom"></i>
                        <ul class="dropdown-container">
                            <div class="padding-space"></div>
                            <router-link to="/handle/userinfo" tag="li">
                                <i class="fas fa-user-secret"></i>
                                <span>账号信息</span>
                            </router-link>
                            <router-link to="/handle/setpassword" tag="li">
                                <i class="fas fa-key"></i>
                                <span>安全设置</span>
                            </router-link>
                            <li @click="logout()" class="logout-item">
                                <i class="fas fa-user-secret"></i>
                                <span>退出</span>
                            </li>
                        </ul>
                    </div>

                    <div class="current-date-container">
                        <div class="handle-icon-item">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="date-details">
                            2011年10月20日
                        </div>

                    </div>

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
import { logout } from '../../../http/admin_http/fetch';
export default {
    name: 'HandlePageLayout',
    components: {

    },
    data() {
        return {
            defaultActiveMenu: this.$router.currentRoute.path,
            siderMessageIsShow: false
        };
    },
    methods: {
        toggleSiderMessage() {
            this.siderMessageIsShow = !this.siderMessageIsShow;
        },
        logout() {
            logout().then(response => {
                console.log(response);
                this.$router.push('/login');
            }).catch(error => {
                console.log(error);
            });
        }
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



