module.exports = function (app, Jokes) {
  return {

    // Landing

    index:function (req, res) {
        
      Jokes.findOne({}, function(err, joke){
        if (err) throw err;

        res.render('index', {
            title: 'The best ghost jokes on the planet'
          , jokes: joke ? [joke] : []
        });
      });
    },

    about: function(req, res){
      res.render('about');
    },

    addJokeForm: function(req, res){
      return req.user ? res.render('addJoke') : res.redirect('/login');
    },

    addJoke: function(req, res){
      if (!req.user) return res.redirect('/login');
      
      return req.user ? res.render('addJoke') : res.render('login');
    },

    userProfile: function(req, res){

      Jokes.find({ 'author.username': req.requestedUser.username }, function(err, jokes){
        if (err) console.error(err);

        var name = req.requestedUser.displayName || req.requestedUser.username
          , title = name + '\'s profile';

        res.render('userProfile', {
            title: title
          , requestedUser: req.requestedUser
          , jokes: jokes
        })
      })
    }

  };
};
