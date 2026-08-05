const ai = require("../config/gemini");

async function analyzeCode(language, code){

    const prompt = `
        You are a senior software engineer.

        Analyze the following ${language} code.

        Provide:
        1. Summary
        2. Strengths
        3. Issues
        4. Suggestions
        5. Time Complexity
        6. Space Complexity

        Return the response in Markdown.

        Code:
        ${code}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
    });

    return response.text;
}

module.exports = {
    analyzeCode
};