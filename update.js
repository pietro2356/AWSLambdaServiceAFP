"use strict";

const mysql = require("mysql2/promise");

module.exports.updateTicket = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "La funzione updateTicket funziona!",
        input: event,
      },
      null,
      2
    ),
  };
};
