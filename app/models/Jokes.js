var mongoose = require('mongoose')

module.exports = function () { /* dal - removed arg */
    var JokeSchema = new mongoose.Schema({
        setup: { type:String, required:true },
        punchline: { type:String, required:true },
        author: {
          username: { type:String, required:true }
        },
        votes: {
          up: { type: Number, 'default': 0 },
          down: { type: Number, 'default': 0 }
        },
        permalink: { type:String, required:true }
    });

    return mongoose.model('jokes', JokeSchema);
 }