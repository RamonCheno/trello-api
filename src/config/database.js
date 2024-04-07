// require('dotenv').config({
//   path: ["./.env.development", "./.env.production"],
// });

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: 'require'
    }
  },
  "test": {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    // 'port': process.env.POSTGRES_PORT
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true
      }
    }
    // 'port': process.env.POSTGRES_PORT
  }
};
