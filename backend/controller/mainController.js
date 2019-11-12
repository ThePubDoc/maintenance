const dbConn = require("../database/db.js"); 
const complaints = dbConn.complaints;

function home(req,res) {
    res.render("home")
}

fun