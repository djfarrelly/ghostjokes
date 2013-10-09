var mongoose = require('mongoose');

module.exports = function (config) {
    //set up mongoose database connection
    if(!mongoose.connection.readyState){
      var dbUri = process.env.MONGOHQ_URL || config.mongodb.uri;
      console.log('Connecting to Mongo via', dbUri);
      mongoose.connect(dbUri, function(err){
        if(err) {
            var msg = 'Failed to connect to mongodb instance at '+dbUri+'. Please confirm database instance is running.'
            throw new Error(msg);
        }
        console.log('Connected to Mongo!');
      });
    }
}