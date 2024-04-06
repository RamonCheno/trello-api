require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DATABASE_USERDEV,
    "password": process.env.DATABASE_PASSWORDDEV,
    "database": process.env.DATABASE_NAMEDEV,
    "host": process.env.DATABASE_HOSTDEV,
    "dialect": 'postgres',
    'port': process.env.DATABASE_PORTDEV
  },
  "test": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DBNAME,
    "host": process.env.POSTGRES_HOST,
    "dialect": 'postgres',
    // 'port': process.env.POSTGRES_PORT
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DBNAME,
    "host": process.env.POSTGRES_HOST,
    "dialect": 'postgres',
    // 'port': process.env.POSTGRES_PORT
  }
}
