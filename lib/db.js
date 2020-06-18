const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host    : config.DB_HOST,
  user    : config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME,
  poolSize: 10,
});
connection.connect();

module.exports = (data) => {
  connection.query('INSERT INTO memo (url, title, description, keywords, author) VALUES (?, ?, ?, ?, ?)', data, function (error, results, fields) {
    if (error) {
      console.log(data);
      throw error;
    }
  });
};