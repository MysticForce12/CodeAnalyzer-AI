const { analyzeCode } = require('../services/analysisService');

async function analyze(req, res){
    try{
        const { language, code } = req.body;

        if(!language || !code){
            return res.status(400).json({
                message: "Language and code are required.",
            });
        }

        const analysis = await analyzeCode(language, code);

        return res.status(200).json({
            analysis,
        });

    } catch(err){
        console.error("Analysis Error: ", err);
        return res.status(500).json({
            message: err.message ||"Failed to analyze code",
        });
    }
}

module.exports = { analyze };