const Maintenance = require("../database/maintenance");

function complaint(req, res) {
  const { building, location, type, complaint, name, mobile, time } = req.body;
  const status = false;
  const maintenance_instance = new Maintenance({building, location, type, complaint, name, mobile, time, status});
  maintenance_instance.save();
  res.render("regid" , {compid: maintenance_instance._id});
}

async function status(req, res) {
  const { comp_id } = req.body;
  console.log(comp_id)
  const complaint = await Maintenance.findOne({_id : comp_id});
  const allComp = [complaint]
  res.render("complaints", {
        allComp
      });
}

async function complaints(req,res){

  const {building, type} = req.body;
  const allComp = await Maintenance.find({ building : building ,
                      type : type});
  res.render("complaints", {
    allComp,
  })
  console.log(complaints);
}

module.exports = {
  complaint: complaint,
  status: status,
  complaints: complaints,
};
