const { connect, connection } = require('mongoose');
const connectionString =
process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetwork';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Exports the connection
module.exports = connection;