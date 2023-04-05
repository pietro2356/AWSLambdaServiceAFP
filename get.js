"use strict";

const mysql = require("mysql2/promise");

module.exports.getTicket = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "La funzione getTicket funziona!",
        input: event,
      },
      null,
      2
    ),
  };
};
