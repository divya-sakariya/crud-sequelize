const debug = require('debug')('db-test:db');
const Sequelize = require('sequelize');

const dbUrl = 'postgres://postgres:password@127.0.0.1:5432/db_test'
let dbOptions = {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
}

// ORM connection settings
let sequelize = new Sequelize(dbUrl, dbOptions);

/**
 * Connects to PostgreSQL showing an error if failing.
 */
sequelize.authenticate()
  .then(() => {
    debug('PostgreSQL: db initialized.');
    /*sequelize.sync({ alter: true }).then(() => {
      debug('PostgreSQL: db synced.');
    }).catch((error) => {
      debug('PostgreSQL: unable to sync to the database: %o ', error);
    });*/
  }).catch((error) => {
    debug('error: %o ', error);
  });

exports.sequelize = sequelize;