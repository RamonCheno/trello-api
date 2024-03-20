require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 8080,
    dbHost: process.env.POSTGRES_HOST,
    dbUser: process.env.POSTGRES_USER,
    dbPassword: process.env.POSTGRES_PASSWORD,
    dbPort: process.env.POSTGRES_PORT,
    dbName: process.env.POSTGRES_DBNAME,
};

module.exports = { config };