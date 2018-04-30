module.exports = app => {
    // app.router.redirect('/', '/admin/', 302);
    app.get('/', app.controller.app.indexApp);
    app.get('/show/*', app.controller.app.userApp);
    app.get('/admin/*', app.middleware.auth(), app.controller.app.adminApp);
    app.get('/chat/*', app.controller.app.ejsApp);
};
