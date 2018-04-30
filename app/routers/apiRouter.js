module.exports = app => {
    app.get('/api/article/list', app.controller.app.list);
    app.get('/api/article/:id', app.controller.app.detail);
    app.post('/api/admin/login', app.controller.admin.login);
    app.get('/api/admin/logout', app.controller.admin.logout);
    app.get('/api/admin/list', app.controller.admin.list);
};
