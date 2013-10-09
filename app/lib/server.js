module.exports = function(app, config) {
    var port = process.env.PORT ||  config.port;
    console.log('[express train application listening on %s]', port);
    return app.listen(port);
}