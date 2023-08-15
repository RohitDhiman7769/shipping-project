const mysql = require('mysql');

const database = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'shipping_project'
})

database.connect((err) => {
  if (err) {
    console.error('Error is', err);
    return;
  }
  console.log('Connected to the database');
});

database.on('error', (err) => {
  console.error(err);
});


module.exports = database;