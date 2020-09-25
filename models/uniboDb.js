'use strict';

const config = require('config');
const mysql = require('mysql');

const myPool = mysql.createPool({
  connectionLimit: 200,
  host: config.get('db.host'),
  user: config.get('db.user'),
  port: config.get('db.port'),
  password: config.get('db.password'),
  database: config.get('db.database')
});

exports.query = function(sql, values) {
  return new Promise((resolve, reject) => {
    myPool.query(sql, values, (err, rows) => {
      if (err) {
        resolve(false);
      } else {
        resolve(rows);
      }
    });
  })
}

var value = ''

exports.set = function(val) { value = val }
exports.get = function() { return value }
module.exports = exports;

