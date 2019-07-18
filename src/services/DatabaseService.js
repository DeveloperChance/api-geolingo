const mysql = require('mysql');
const config = require('../config/DatabaseConfig');
const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password
});

let db = {};

// Universal
db.getRecord = (pkey, schema, table, key, value) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ? FROM ?.? WHERE ?=?`, [pkey, schema, table, key, value], (error, results) => {
            if(error) return console.log(error), reject(error);
            return resolve(results);
        });
    });
}

db.getRecordLower = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ? FROM ?.? WHERE lower(?)=(?)`, [pkey, schema, table, key, value], (error, results) => {
            if(error) return console.log(error), reject(error);
            return resolve(results);
        });
    });
}

module.exports = db;