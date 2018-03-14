module.exports = app => {
    app.router.redirect('/', '/admin/', 302);
    app.get('/show/*', app.controller.app.userApp);
    app.get('/admin/*', app.controller.app.adminApp);
};
