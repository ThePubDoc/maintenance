const db = require("mongoose"); 
const log = require("../../utils").log; 

db.set("useNewUrlParser", true); 
db.set("useUnifiedTopology", true); 
db.set("useFindAndModify", false);

module.exports = models= {};

const DB_URL = "mongodb://localhost:27017/maintenance"; 

models.init = async() =>{
    log.info(`connecting database at ${DB_URL}`);
    try{
        await db.connect(DB_URL); 
        log.info(`database connected`); 
    }catch(err){
        log.error(err);
    throw err; 
    }
}
