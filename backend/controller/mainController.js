// const dbConn = require("../database/db.js");
const Maintenance = require("../database/maintenance");
// const complaints = dbConn.complaints;

function home(req, res) {
  res.render("home");
}

function complaint(req, res) {
  const buildings = [
    "8.1K (Raheem Dass) Boys Hostel",
    "8.1K (Malik Mohd. Jaysi) Boys Hostel",
    "8.1K (Tulsi Dass) Boys Hostel",
    "8.2E (Rani Laxmi Bai) Girls Hostel",
    "School Of Law",
    "School of Applied",
    "School of Architecture & Build Environment",
    "Dispensary",
    "Narayan Guru B.H.",
    "SCHOOL OF MANAGEMENT",
    "SCHOOL OF ICT",
    "SCHOOL OF ENGINEERING",
    "SCHOOL OF BIOTECHNOLOGY",
    "MEDITATION CENTRE",
    "ENGINEERING WORKSHOP",
    "B.R. AMBEDKAR LIBRARY",
    "SAVITRI BAI PHULE G.H.",
    "RAMA BAI GIRLS HOSTEL",
    "MAHA MAYA G.H.",
    "SANT KABIR DAS HOSTEL",
    "BiRSA MUNDA BOYS HOSTEL",
    "SANT RAVI DAS BOYS HOSTEL",
    "GURU CHASI DAS B H.",
    "CHHATRAPATI SAHOO Jl MAHARAJ Hostel",
    "ADMIN BLOCK",
    "8.1 G (Ram Sharan Dass) BOYS HOSTEL",
    "ELECTRICITY POWERHOUSE",
    "INDOOR STADIUM",
    "GUEST HOUSE",
    "MRSH",
    "CRICKET PAVELIAN",
    "CHANGING ROOM OF PRACTICE FIELD",
    "COMPUTER CENTER",
    "SPORTS CENTER",
    "8.1 (Monshi Prem Chand) Boys Hostel",
    "TYPE 2/3 JYM",
    "8.1L",
    "FOOTBALL PAVILION",
    "HOCKEY PAVILION",
    "MAHA DEVI VERMA GIRS HOSTEL",
    "Site Office",
    "Ismat Chuktai",
    "BD-5",
    "GD-3",
    "Girl's Dining-0l",
    "Girls Dining-02",
    "Boys Dining-01",
    "Boys Dining-02",
    "Boys Dining-03",
    "Boys Dining-04",
    "Boys Dining-05",
    "Boys Dining-06"
  ];
  res.render("complaint", {
    buildings
  });
}

function admin(req, res) {
  if(req.session.user){
    res.redirect("/select")
  }
  else{
    res.render("admin");
  }
}

function civilComplaints(req, res) {
  if (!req.session.user) {
    res.redirect("/admin");
  } else {
    
  }
}

function allComplaints(req, res) {
  res.render("complaintTypeSelection");
}

function selecttype(req, res) {
  const buildings = [
    "8.1K (Raheem Dass) Boys Hostel",
    "8.1K (Malik Mohd. Jaysi) Boys Hostel",
    "8.1K (Tulsi Dass) Boys Hostel",
    "8.2E (Rani Laxmi Bai) Girls Hostel",
    "School Of Law",
    "School of Applied",
    "School of Architecture & Build Environment",
    "Dispensary",
    "Narayan Guru B.H.",
    "SCHOOL OF MANAGEMENT",
    "SCHOOL OF ICT",
    "SCHOOL OF ENGINEERING",
    "SCHOOL OF BIOTECHNOLOGY",
    "MEDITATION CENTRE",
    "ENGINEERING WORKSHOP",
    "B.R. AMBEDKAR LIBRARY",
    "SAVITRI BAI PHULE G.H.",
    "RAMA BAI GIRLS HOSTEL",
    "MAHA MAYA G.H.",
    "SANT KABIR DAS HOSTEL",
    "BiRSA MUNDA BOYS HOSTEL",
    "SANT RAVI DAS BOYS HOSTEL",
    "GURU CHASI DAS B H.",
    "CHHATRAPATI SAHOO Jl MAHARAJ Hostel",
    "ADMIN BLOCK",
    "8.1 G (Ram Sharan Dass) BOYS HOSTEL",
    "ELECTRICITY POWERHOUSE",
    "INDOOR STADIUM",
    "GUEST HOUSE",
    "MRSH",
    "CRICKET PAVELIAN",
    "CHANGING ROOM OF PRACTICE FIELD",
    "COMPUTER CENTER",
    "SPORTS CENTER",
    "8.1 (Monshi Prem Chand) Boys Hostel",
    "TYPE 2/3 JYM",
    "8.1L",
    "FOOTBALL PAVILION",
    "HOCKEY PAVILION",
    "MAHA DEVI VERMA GIRS HOSTEL",
    "Site Office",
    "Ismat Chuktai",
    "BD-5",
    "GD-3",
    "Girl's Dining-0l",
    "Girls Dining-02",
    "Boys Dining-01",
    "Boys Dining-02",
    "Boys Dining-03",
    "Boys Dining-04",
    "Boys Dining-05",
    "Boys Dining-06"
  ];
  res.render("selecttype", {
    buildings
  });
}

function electricalComplaints(req, res) {
  if (!req.session.user) {
    res.redirect("/admin");
  } else {
    
  }
}

function status(req, res) {
  complaints.findAll().then(allComp => {
    res.render("status", {
      allComp: allComp
    });
  });
}

function complaintStatus(req, res) {}

module.exports = {
  home: home,
  complaint: complaint,
  admin: admin,
  allComplaints: allComplaints,
  status: status,
  complaintStatus: complaintStatus,
  civilComplaints: civilComplaints,
  electricalComplaints: electricalComplaints,
  selecttype
};
