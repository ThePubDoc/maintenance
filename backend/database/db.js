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
    building : {
        type : Sequelize.STRING,
        allowNull : false
    },
    location: {
        type : Sequelize.STRING,
        allowNull : true
    },
    type : {
        type : Sequelize.STRING,
        allowNull : false
    },
    complaint : {
        type : Sequelize.STRING,
        allowNull : false
    },
    name : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    },
    mobile : {
        type : Sequelize.NUMBER,
        allowNull : false
    },
    time : {
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

