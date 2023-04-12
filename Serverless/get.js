"use strict";

const mysql = require("mysql2/promise");

module.exports.getTicket = async (event) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM Ticket");
    connection.end();

    return {
      statusCode: 200,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "true",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      },
      body: JSON.stringify(rows, null, 2),
    };
  } catch (error) {
    connection.end();

    return {
      statusCode: 500,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "true",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      },
      body: JSON.stringify(error.message),
    };
  }
};
