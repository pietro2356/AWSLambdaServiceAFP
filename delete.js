"use strict";

const mysql = require("mysql2/promise");

module.exports.deleteTicket = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "La funzione deleteTicket funziona!",
        input: event,
      },
      null,
      2
    ),
  };
};
