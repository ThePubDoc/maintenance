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
        // console.log(comp)
        res.json({
            "complaint_id" : comp.id
        })
    })
}

function status(req,res){
    const {comp_id} = req.body
    
    complaints.findOne({
        where : {
            id : comp_id
        }
    })
    .then(comp => {
        res.render("status" , {
            comp  : comp
        })
    })
}


module.exports = {
    complaint : complaint,
    status : status
}