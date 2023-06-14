const { User } = require("../model/formSubmitModel");

const getAllProducts = async (req, res, next) => {
	try {
		let result = await User.findAll();
		res.json({ result });
	} catch (error) {
		console.log(error);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		const userId = req.params.id;
		await User.destroy({ where: { id: userId } });
		res.send("row deleted");
	} catch (error) {
		console.log(error);
	}
};

const addProduct = async (req, res, next) => {
	try {
		const { name, email, phoneno } = req.body;
		const newUser = await User.create({
			name: name,
			email: email,
			phoneno: phoneno,
		});
		res.send("user created");
	} catch (error) {
		res.send(error);
	}
};
module.exports = { getAllProducts, addProduct, deleteProduct };
