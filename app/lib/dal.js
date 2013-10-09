var mongoose = require('mongoose');

module.exports = function (config) {
    //set up mongoose database connection
    if(!mongoose.connection.readyState){
      var dbUri = process.env.MONGOHQ_URL || config.mongodb.uri;
      mongoose.connect(dbUri, function(err){
        if(err) {
            var msg = 'Failed to connect to mongodb instance at '+dbUri+'. Please confirm database instance is running.'
            throw new Error(msg);
        }
      });
    }
}