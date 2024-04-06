require('dotenv').config();

module.exports = {
  "development": {
    // "username": process.env.POSTGRES_USER,
    // "password": process.env.POSTGRES_PASSWORD,
    // "database": process.env.POSTGRES_DBNAME,
    // "host": process.env.POSTGRES_HOST,
    // "dialect": 'postgres',
    // 'port': process.env.POSTGRES_PORT
    "url": process.env.DATABASE_URL
  },
  "test": {
    "url": process.env.DATABASE_URL
  },
  "production": {
    "url": process.env.DATABASE_URL
  }
}
