const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

//Connect to DB
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

//Make creating future models easier
fs
    .readdirSync(__dirname)
    .filter(file => 
        file !== 'index.js'     
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize)
        db[model.name] = model
    })

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db