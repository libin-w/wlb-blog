module.exports = app => {
    require('./routers/webRouter')(app);
    require('./routers/apiRouter')(app);
};
