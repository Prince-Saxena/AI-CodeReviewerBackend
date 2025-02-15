const express = require("express");
const cors = require("cors");
require("dotenv").config();
const aiRoute = require("./Routes/ai.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: [
			"https://prince-saxena.github.io",
			"http://localhost:3000",
			"http://localhost:5173",
		],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"], 
		credentials: true,
	})
);
app.get("/", (req, res) => {
	res.send("Working Fine!");
});
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use("/ai", aiRoute);

module.exports = app;
