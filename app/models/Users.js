var mongoose = require('mongoose')

module.exports = function () { /* dal - removed arg */
    var UserSchema = new mongoose.Schema({
        
          username: { type:String, required:true, unique:true, lowercase: true }
        , email: { type:String, unique:true, lowercase: true }
        , displayName: { type:String, required:true }
        , photo: String
        , joined: { type: Date, 'default': Date.now }
        
        , fbId: String
        , twitterId: String

    });

    return mongoose.model('users', UserSchema);
}