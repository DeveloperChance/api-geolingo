const mysql = require('mysql');
const config = require('../config/DatabaseConfig');
const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password
});

let db = {};

// test
db.testRecord = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM geolingo.test`, (error, results) => {
            if(error) return console.log(error), reject(error);
            return resolve(results);
        });
    });
}

module.exports = db;