function AnalyzeButton({ onAnalyze, loading }){

    return(
        <button
            onClick={onAnalyze}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
            {loading ? "Analyzing..." : "Analyze Code"}
        </button>
    );
}

export default AnalyzeButton;