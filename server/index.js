const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'cruddb',
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/insert", (req,res)=>{

    const namaBarang = req.body.namaBarang
    const hargaBeli = req.body.hargaBeli
    const hargaJual = req.body.hargaJual
    const stok = req.body.stok

    const sqlInsert = "INSERT INTO list_barang(namaBarang, hargaBeli, hargaJual, stok) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [namaBarang, hargaBeli, hargaJual,stok], (err, result)=>{
        console.log(result);
    });
});

// app.get("/api", (req,res)=>{
//     const sqlInsert = "SELECT * FROM moview"
// })

app.listen(3001, ()=>{
    console.log("running on port 3001");
});