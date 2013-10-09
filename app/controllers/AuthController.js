
/*
 *  Authentication and other pages
 */

module.exports = function (app) {
  return {

    login: function(req, res){
      return req.user ? res.redirect('/') : res.render('login');
    },

    logout: function(req, res){
      req.logout();
      res.redirect('/');
    }

  };
};
