<template>
    <div class="base-layout-style">
        <div class="layout-sider">

        </div>
        <div class="layout-body">
            <div class="layout-header">

            </div>
            <div class="layout-content">
                <div class="breadcrumb-container">
                    <BreadcrumbNav></BreadcrumbNav>
                </div>
                <div class="content-container">
                    <slot name="main"></slot>
                </div>
            </div>

        </div>
        <!-- <div class="layout-header">
            <div class="header-logo">
                <h1>王立斌</h1>
            </div>
            <div class="header-content">
                <HeaderContent></HeaderContent>
            </div>
        </div>
        <div class="layout-body">
            <div class="layout-sider">
                <SiderMenu></SiderMenu>
            </div>
            <div class="layout-content">
                <div class="breadcrumb-container">
                    <BreadcrumbNav></BreadcrumbNav>
                </div>
                <div class="content-container">
                    <slot name="main"></slot>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script type="text/babel">
import SiderMenu from '../../app/admin/SiderMenu/SiderMenu';
import HeaderContent from '../../app/admin/HeaderContent/HeaderContent';
import BreadcrumbNav from '../../app/admin/BreadcrumbNav/BreadcrumbNav';
export default {
    components: {
        SiderMenu,
        HeaderContent,
        BreadcrumbNav
    },
    data() {
        return {
        };
    }
};
</script>


