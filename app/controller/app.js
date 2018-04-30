const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
const fs = require('fs');
const CHAT_APP_VERSIONS = fs.readFileSync('app/react_version/chat_app_versions.json');
class AppController extends Controller {
    async userApp() {
        await this.ctx.render('user_app/user_app.js', {
            url: this.ctx.url.replace(/\/app/, '')
        });
    }
    async adminApp() {
        await this.ctx.render('admin_app/admin_app.js', {
            url: this.ctx.url.replace(/\/app/, '')
        });
    }
    async ejsApp() {
        await this.ctx.render('chat_app/index.html', {
            CHAT_APP_VERSIONS: JSON.parse(CHAT_APP_VERSIONS)
        });
    }
    async indexApp() {
        await this.ctx.render('index_page/index.html');
    }

    async list() {
        const pageIndex = this.ctx.query.pageIndex;
        const pageSize = this.ctx.query.pageSize;
        this.ctx.body = Model.getPage(pageIndex, pageSize);
    }

    async detail() {
        const id = this.ctx.query.id;
        this.ctx.body = Model.getDetail(id);
    }
}

module.exports = AppController;
