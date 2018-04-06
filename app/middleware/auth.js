module.exports = options => {
    return async function auth(ctx, next) {
        await next();
        console.log(123456789123456789, ctx.path);
        if (ctx.path === '/admin/login' || ctx.path === '/api/admin/login') {
            return;
        }
        if (!ctx.session.visited) {
            const apiPathReg = /^\/api\/./;
            if (apiPathReg.test(ctx.path)) {
                ctx.body = {
                    code: 40001,
                    data: [],
                    message: '您还未登录，请登录'
                };
            } else {
                ctx.redirect('/admin/login');
            }
        }
    };
};
