"use strict";

const mysql = require("mysql2/promise");

module.exports.insertTicket = async (event) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
  });

  try {

    var data = JSON.parse(event.body.trim());
    
    
    const [rows, fields] = await connection.execute(
      "INSERT INTO Ticket (username, ip_caller, ip_server, url_path_server, patient, hospital, department, description, valid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        data.username,
        data.ip_caller,
        data.ip_server,
        data.url_path_server,
        data.patient,
        data.hospital,
        data.department,
        data.description,
        data.valid,
      ]
    );

    connection.end();

    return {
      statusCode: 200,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(rows),
    };
  } catch (error) {
    connection.end();

    return {
      statusCode: 500,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(error.message),
    };
  }
};