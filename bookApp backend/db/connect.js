const mysql = require("mysql2");

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Sahil@2000", {
	host: "localhost",
	dialect: "mysql",
});

const checkConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("connected to db...");
	} catch (error) {
		console.log("unable to connect to db...", error);
	}
};
// checkConnection()

module.exports = {sequelize};
