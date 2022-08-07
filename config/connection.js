const Sequelize = require('sequelize');
require('dotenv').config();

 let sequelize;
  
 if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
 } else {
  sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  }

module.exports = sequelize;