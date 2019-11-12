const Sequelize = require('sequelize');
const path = require("path");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,"db.sqlite")
});

const complaints = sequelize.define('complaints',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    department : {
        type : Sequelize.STRING,
        allowNull : false
    },
    room_no: {
        type : Sequelize.STRING,
        allowNull : true
    },
    complaint : {
        type : Sequelize.STRING,
        allowNull : false
    },
    status : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    }
});

module.exports = {
    complaints : complaints,
}


sequelize.sync()
.then(() => console.log('table has been successfully created, if one doesn\'t exist'))
.catch(error => console.log('This error occurred' ,error));

