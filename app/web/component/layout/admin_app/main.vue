<template>
    <Layout>
        <Header>Header</Header>
        <Layout>
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
// import PageContainer from './PageContainer/PageContainer';
export default {
    // components: {
    //     PageContainer
    // }
};
</script>

