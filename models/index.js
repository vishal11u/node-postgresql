const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL using Sequelize!"))
  .catch((err) => console.error("Unable to connect to PostgreSQL:", err));

module.exports = sequelize;
