require('dotenv').config()
const Sequelize = require('sequelize')

const db = new Sequelize(
    process.env.NAME_DB,
    process.env.USER_DB,
    process.env.PASSWORD_DB,
    {
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    }
)

module.exports = {db}
