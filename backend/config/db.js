const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
        port: config.development.port,
        logging: false
    }
);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected successfully!");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    }
}

testConnection();

module.exports = sequelize;
