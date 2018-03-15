<template>
    <Layout>
        <Header>Header</Header>
        <Layout class="ivu-layout-has-sider">
            <Sider hide-trigger>Sider</Sider>
            <Content class="base-page-container">
                <div class="base-page-container">
                    <slot name="main"></slot>
                </div>
            </Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
</template>
<script type="text/babel">
export default {

};
</script>

