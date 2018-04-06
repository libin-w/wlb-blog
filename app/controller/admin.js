const Controller = require('egg').Controller;
class AdminController extends Controller {
    async login() {
        // console.log(123456789);
        // console.log(this.ctx.request.body);
        this.ctx.session.visited = 'qwerty';
        // this.ctx.session.maxAge = 10000;
        console.log(this.ctx.session);
        this.ctx.body = {
            status: true,
            message: '2weghj',
            data: this.ctx.request.body
        };
    }
    async list() {
        this.ctx.body = this.ctx;
    }
}
module.exports = AdminController;
