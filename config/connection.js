require('dotenv').config();

const Sequelize = require('sequelize');

// const sequelize = new Sequelize(

//   // database name
//   process.env.DATABASE_NAME,
//   // user
//   process.env.USER, 
//   // password
//   process.env.PASSWORD,
//   {
//     host: 'localhost',
//     dialect:'mysql',
//     port: 3306
//   }
// );
// below is the starter code connection for sequilize / not sure if this was right!!!???
 const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;