'use strict'
var mysql = require('mysql')

var db_config = {
  connectionLimit: 10,
  host: 'sandbox-database',
  port: 3306,
  user: 'root',
  password: 'atf',
  database: 'store'
};

var pool = mysql.createPool(db_config);

module.exports = pool
