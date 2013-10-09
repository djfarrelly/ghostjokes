var hbs = require('hbs') //hbs = require('express-hbs')
  , path = require('path');

module.exports = function (app) {

    // Using hbs
    app.set('view engine', 'hbs');

    hbs.registerPartials(path.join(__dirname, '../views/partials'));


    // When using express-hbs
    // app.set('view engine', 'hbs');
    // app.set('views', path.join(__dirname, '../views'));
    // app.engine('hbs', hbs.express3({
    //     partialsDir: path.join(__dirname, '../views/partials')
    // }));

    // Static locals
    app.locals({});
};