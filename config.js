require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  MONGODB_URI:
        process.env.MONGODB_URI || 'mongodb://localhost:27017/pokr-backend',
  TEST_MONGODB_URI:
        process.env.TEST_MONGODB_URI ||
        'mongodb://localhost/pokr-backend-test',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'

};
