const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const formRouter = require("./routes/formSubmit");
const { sequelize } = require("./db/connect");

app.use(express.json());

app.use("/api/v1/formsubmit", formRouter);

(async () => {
	try {
		await sequelize.sync();

		app.listen(4000, () => console.log("server listening on port 4000..."));
	} catch (error) {
		console.log("error synchronizing...");
	}
})();
