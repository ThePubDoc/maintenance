const dbConn = require("../database/db.js"); 
const complaints = dbConn.complaints;

function complaint(req,res){
    const {building, location, type, complaint, name, mobile, time} = req.body;
    const status = false;
    console.log(req.body);
    complaints.create({
        building,
        location,
        type,
        complaint,
        name,
        mobile,
        status,
        time
    })
    .then(comp => {
        res.send("/submitted")
    })
}

module.exports = {
    complaint : complaint
}