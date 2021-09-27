var mysql = require('mysql');

const con = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PSWD,
    database: process.env.MYSQL_DB,
   });

   con.getConnection((err) => {
    if (err) throw err;
    console.log("Database is connected...");
   });
   

module.exports = {
    getUsers: (req, res) => {
        con.query(
            `SELECT * FROM users`,
            (err, result, fields) => {
            if (err) throw err;
                console.log(result);
            var response = {status: 200, data: result};
            return res.status(response.status).json(response.data);
            }
         );
        // return res.status(200).json("Welcome to model.");
    },
    findUser: (req, res) => {
        con.query(
            `SELECT * FROM users where id = ${req.params.id}`,
            (err, result, fields) => {
            if (err) throw err;
                console.log(result);
            var response = {status: 200, data: result};
            return res.status(response.status).json(response.data);
            }
         );
    }
}