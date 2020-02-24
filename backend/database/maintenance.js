const mongoose = require("mongoose")

const schema = mongoose.Schema

const maintenanceSchema = new schema({
    building : {type : String ,required : true},
    location : {type : String , required : true},
    type : {type: String,required: true},
    complaint : {type: String , required : true},
    name : {type: String , required : true},
    mobile : {type: Number , required : true},
    time : {type: String , required : true},
    status : {type: Boolean , default : false},
},{timestamps : true})

module.exports = complaint = mongoose.model("complaint" , maintenanceSchema);

