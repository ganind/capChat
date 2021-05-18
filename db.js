const mysql = require("mysql2");
const dbConfig = require("./db.config.js");

// Création de connexion à la bdd
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// Connexion à mysql
connection.connect(error =>{
    if (error) throw error;
    console.log("Connexion réussie !")
});

module.exports = connection;
