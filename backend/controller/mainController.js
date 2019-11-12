const dbConn = require("../database/db.js"); 
const complaints = dbConn.complaints;

function home(req,res) {
    res.render("home")
}

function complaint(req,res){
    res.render("complaint")
}

function admin(req,res){
    res.render("admin")
}

function allComplaints(req,res){
    if(!req.session.user){
        res.redirect('/admin');
    }
    else{
        complaints.findAll()
        .then(allComp => {
            res.render("complaints", {
                allComp : allComp,
            })
        })
    }
}

function status(req,res){
    complaints.findAll()
    .then(allComp => {
        res.render("status",{
            allComp : allComp,
        })
    })
}

function complaintStatus(req,res){
    
}

module.exports = {
    home: home,
    complaint : complaint,
    admin : admin,
    allComplaints : allComplaints,
    status : status,
    complaintStatus : complaintStatus
}