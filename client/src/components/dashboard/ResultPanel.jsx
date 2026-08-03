function ResultPanel({ analysis, loading }){
    return(
        <div className="flex-1">
            { loading && <p>Analyzing</p> }
            { analysis && <pre className="whitespace-pre-wrap">{analysis}</pre> }
            { !loading && !analysis && <p>No analysis</p> }
        </div>
    );
}

export default ResultPanel;