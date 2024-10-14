const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Para interpretar los datos JSON

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "sigcr" 
});

// Ruta para insertar datos de registro (por si la usas en otro contexto)
app.post('/sigcr', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

// Ruta para login de usuario
app.post('/personas_cuenta', (req, res) => {
    const sql = "SELECT * FROM personas_cuenta WHERE nombreUsuario = ? AND clave = ?"; 
    db.query(sql, [req.body.nombreUsuario, req.body.clave], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});

app.listen(8081, () => {
    console.log("Servidor corriendo en el puerto 8081");
});
