//var resource = require('express-resource');
var passport = require('passport');

module.exports = function (app, ApiController, HomeController, AuthController, models, Users) {

  // Home
  //app.resource(app.controllers.home);
  app.get('/', HomeController.index);
  app.get('/about', HomeController.about);

  //Generic restful api for all models - if previous routes are not matched, will fall back to these
  //See libs/params.js, which adds param middleware to load & set req.Model based on :model argument
  app.get('/api/:model', ApiController.search);
  app.post('/api/:model', ApiController.create);
  app.get('/api/:model/:id', ApiController.read);
  app.post('/api/:model/:id', ApiController.update);
  app.del('/api/:model/:id', ApiController.destroy);

  // Profiles
  app.get('/ghosts/:username', HomeController.userProfile);

  // Add a joke
  // app.get('/add-a-joke', HomeController.addJoke);

  
  // Authentication
  app.get('/login', AuthController.login);
  app.get('/logout', AuthController.logout);
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/',
                                       failureRedirect: '/login' }));


  // Model Param for API controller
  app.param('model', function(req, res, next, model) {

    var Model = models[model];
    if (Model === undefined) {
      return res.send(404);
    }

    req.Model = Model;
    return next();
  });

  // Username param for user profiles
  app.param('username', function(req, res, next, username) {
    
    Users.findOne({ username: username }, function(err, user){
      if (err || !user) return res.render('404');

      req.requestedUser = user;
      return next();
    });
  });
};