const mysql2 = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
const migration = require('mysql-migrations')

const db = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
})

migration.init(db, __dirname + '/src/migration', function () {
  console.log('finished running migrations')
})
