var hbs = require('express-hbs'),
    path = require('path');

module.exports = function (app) {

    //set up view engine
    app.set('view engine', 'hbs');

    console.log("Dirname:", __dirname, 'filename: ', __filename, "Partials path", path.join(__dirname, "../views/partials"));

    app.engine('hbs', hbs.express3({
        partialsDir:path.join(__dirname, "../views/partials")
    }));

    // Static locals
    app.locals({
    });
};