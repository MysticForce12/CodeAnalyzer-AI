function AnalyzeButton({ onAnalyze, loading }){
    return(
        <button onClick={onAnalyze} disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {loading ? "Analyzing..." : "Analyze"}
        </button>
    );
}

export default AnalyzeButton;