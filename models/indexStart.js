const dbConfig =  require('../config/dbConfig');
const {Sequelize, DataTypes, } = require('sequelize');

const sequelize = new Sequelize(
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases: false // if errors in ua code will overwrite the errors using this line
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('database connection successfully...')
})
.catch(err =>{
    console
    .log('Error' + err)
})
const  db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require('./studentModel.js')(sequelize, DataTypes)
db.courses = require('./courseModel.js')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=> {
    console.log('re-sync done')
})
module.exports = db;


//force:false always must be false
//re.sync done message will be seen in terminal