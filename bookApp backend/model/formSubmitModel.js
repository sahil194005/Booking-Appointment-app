 const {sequelize} = require('../db/connect')
const {Sequelize,DataTypes }= require('sequelize')

const User = sequelize.define('User',{
	id:{
		type:DataTypes.INTEGER,
		primaryKey:true,
		autoIncrement:true,
		// allowNull:false,
		// unique:true
	},   
	name:{
		type:DataTypes.STRING,
		allowNull:false,
	}, 
	email:{
		type: DataTypes.STRING,
		allowNull:false,
		unique:true
	}, 
	phoneno:{
		type:DataTypes.BIGINT,
		allowNull:false
	}
	
})

module.exports = {User}