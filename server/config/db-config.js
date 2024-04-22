require("dotenv").config();
module.exports = {
  development: {
    username: process.env.MYSQLDB_USER,
    password: null,
    database: process.env.MYSQL_DATABASE,
    host: "localhost",
    dialect: "mysql",
  },
};
