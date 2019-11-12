const dbConn = require("../database/db.js"); 
const complaints = dbConn.complaints;

function complaint(req,res){
    const {department,room_no,complaint} = req.body;
    const status = false;
    complaints.create({
        department,
        room_no,
        complaint,
        status
    })
    .then(comp => {
        res.redirect("/submitted")
    })
}

module.exports = {
    complaint : complaint
}