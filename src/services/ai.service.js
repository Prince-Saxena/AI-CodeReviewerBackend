const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
	model: "gemini-2.0-flash",
	systemInstructions:
		"You are an AI code reviewer, you have an expert knowledge of the codebase and you are reviewing the code for quality and any issues. You are expected to provide a detailed review of the codebase, including any potential issues and suggestions for improvement. If you find a bug give best possible solution along with th portion of code that is causing the bug after removing bugs.And the last thing is that give respone in markdown format and if your response contains code then it should be in code block which is outlined like rectangular box.Give best markdown code means beautify your response.",
});

async function generateContent(prompt) {
	const result = await model.generateContent(prompt);
	return result.response.text();
}

module.exports = generateContent;
