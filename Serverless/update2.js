"use strict";

const mysql = require("mysql2/promise");

module.exports.updateTicket = async (event) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
  });

  try {

    let data = JSON.parse(event.body);

    const [rows, fields] = await connection.execute(
      "UPDATE Ticket SET description = ? WHERE id = ?",
      [data.description, data.id]
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
