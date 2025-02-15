const generateContent = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
	const code = req.body.code;
	if (!code) {
		res.status(400).send("Code is required");
		return;
	}
	const result = await generateContent(code);
	res.send(result);
};
