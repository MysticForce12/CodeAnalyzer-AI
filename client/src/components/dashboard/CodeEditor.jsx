import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language }){
    return (
        <div className="h-[75vh] border rounded overflow-hidden">
            <Editor
                height="100%"
                language={language}
                theme="vs-dark"
                value={code}
                onChange={ (value)=>setCode(value || "") } 
                options={{
                    minimap:{ enabled: false },
                    fontSize: 14,
                    automaticLayout: true,
                    wordWrap: "on",
                    scrollBeyondLastLine: false,
                }}
            />
        </div>
    );
}

export default CodeEditor;