import { useState } from "react";
import LanguageSelector from "../components/dashboard/LanguageSelector.jsx";
import CodeEditor from "../components/dashboard/CodeEditor.jsx";
import AnalyzeButton from "../components/dashboard/AnalyzeButton.jsx";
import ResultPanel from "../components/dashboard/ResultPanel.jsx";
import analysisService from "../services/analysisService";

function Dashboard(){

    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleAnalyze = async()=>{
        if(!code.trim()){
            alert("Please enter some code first.");
            return;
        }
        setLoading(true);

        try{
            const result = await analysisService.analyze(language, code);
            setAnalysis(result.analysis);
        } catch(err){
            console.error(err);
            alert(err.response?.data?.message ||"Code analysis failed");
        } finally{
            setLoading(false);
        }
    };

    return(
        <div className="min-h-screen p-6 flex flex-col">
            
            <div className="flex justify-between items-center mb-6">
                <LanguageSelector language={language} setLanguage={setLanguage}/>
                <AnalyzeButton onAnalyze={handleAnalyze} loading={loading}/>
            </div>
            
            <div className="flex gap-6 h-[75vh]">

                <div className="flex flex-col flex-1 border rounded-lg p-4">
                    <CodeEditor code={code} setCode={setCode} language={language}/>
                </div>
                
                <div className="flex-1 border rounded-lg p-4 h-[75vh] overflow-auto">
                    <ResultPanel analysis={analysis} loading={loading}/>    
                </div>

            </div>

        </div>
    );
}

export default Dashboard;