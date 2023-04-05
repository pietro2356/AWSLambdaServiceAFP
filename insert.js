"use strict";

const mysql = require("mysql2/promise");

module.exports.insertTicket = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "La funzione insertTicket funziona!",
        input: event,
      },
      null,
      2
    ),
  };
};
