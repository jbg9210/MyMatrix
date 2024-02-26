const mysql = require("mysql2/promise");
const { databasSecret } = require("./secret");

exports.pool = mysql.createPool(databasSecret);