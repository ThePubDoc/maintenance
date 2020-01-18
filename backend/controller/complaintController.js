const dbConn = require("../database/db.js");
const complaints = dbConn.complaints;

function complaint(req, res) {
  const { building, location, type, complaint, name, mobile, time } = req.body;
  const status = false;
  console.log(req.body);
  complaints
    .create({
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
      res.render("regid", { compid: comp.id });
    })
    .catch(err => {
      res.send("Error occured in registering", err);
    });
}

function status(req, res) {
  const { comp_id } = req.body;

  complaints
    .findOne({
      where: {
        id: comp_id
      }
    })
    .then(comp => {
      const allComp = [];
      allComp.push(comp.dataValues);
      res.render("complaints", {
        allComp
      });
    })
    .catch(err => {
      res.send("Error in finding the complaint", err);
    });
}

module.exports = {
  complaint: complaint,
  status: status
};
