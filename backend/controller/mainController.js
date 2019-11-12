const dbConn = require("../database/db.js"); 
const complaints = dbConn.complaints;

function home(req,res) {
    res.render("home")
}

function complaint(req,res){
    res.redirect("/complaint")
}

module.exports = {
    home: home,
    complaint : complaint
}