'use strict'

const mysql = require("mysql2/promise");

module.exports.getAll = async (event) => {
    const connection = await mysql.createConnection({
        host: "afphospitalmanagment.cqttky88vx96.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "admin",
        password: "LguEz66SXdj3dSr",
        database: "AFPHospitalTicketing"
    });

    try {
        const [rows, fields] = await connection.execute("SELECT * FROM Ticket");
        connection.end();

        return {
            statusCode: 200,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(rows, null, 2)
        };

    } catch (error) {
        connection.end();

        return {
            statusCode: 500,
            body: JSON.stringify(error.message),
            headers: {
                "Content-type": "application/json",
            }
        }
    }
}