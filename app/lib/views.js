var hbs = require('express-hbs')
  , path = require('path')
  , fs = require('fs');

module.exports = function (app) {

    //set up view engine
    app.set('view engine', 'hbs');

    console.log('Partials path', path.join(__dirname, '../views/partials'));

    // testing if there is anything in the partials folder
    fs.readdir(path.join(__dirname, '../views/partials'), function(err, files){
      if (err) console.log(err);

      console.log('FILES FOUND', files);
    });

    app.set('views', path.join(__dirname, '../views'));

    app.engine('hbs', hbs.express3({
        partialsDir: path.join(__dirname, '../views/partials')
    }));

    // Static locals
    app.locals({
    });
};