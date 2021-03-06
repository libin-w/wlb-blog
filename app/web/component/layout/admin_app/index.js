import MainLayout from './main';

const tpl = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

export default {
    name: 'AdminAppLayout',
    props: ['title', 'description', 'keywords'],
    components: {
        MainLayout
    },
    computed: {
        vTitle() {
            return this.$root.title || this.title || 'admin-app';
        },
        vKeywords() {
            return this.$root.keywords || this.keywords || 'egg, vue, webpack, server side render';
        },
        vDescription() {
            return this.$root.description || this.description || 'egg-vue-webpack server side render';
        },
        baseClass() {
            return this.$root.baseClass;
        }
    },
    template: EASY_ENV_IS_BROWSER
        ? tpl
        : `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>{{vTitle}}</title>
                    <meta name="keywords" :content="vKeywords">
                    <meta name="description" :content="vDescription">
                    <meta http-equiv="content-type" content="text/html;charset=utf-8">
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                  </head>
                  <body :class="baseClass">
                    ${tpl}
                  </body>
                </html>`
};
