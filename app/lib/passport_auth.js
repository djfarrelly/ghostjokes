var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function (config, app, Users) {

  // Serialization for sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
      done(err, user);
    });
  });


  // Twitter Auth
  passport.use(new TwitterStrategy({
      consumerKey: config.twitterAuth.consumerKey,
      consumerSecret: config.twitterAuth.consumerSecret,
      callbackURL: config.twitterAuth.callbackURL
    },
    function(token, tokenSecret, profile, done) {

      Users.findOne({ username: profile.username }, function(err, existingUser){
        if (err) return done(err);

        if (existingUser) {
          done(null, existingUser);
        } else {

          Users.create({
            
              username: profile.username
            , displayName: profile.displayName
            , twitterId: profile.id
            , photo: profile.photos[0].value || ''

          }, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
          });

        }
      });
    }
  ));
}