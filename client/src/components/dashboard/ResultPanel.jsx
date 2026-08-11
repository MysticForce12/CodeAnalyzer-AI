import ReactMarkdown from "react-markdown";

function ResultPanel({ analysis, loading }){
    
    return (
        <div className="h-full overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">

            {loading && (
                <div className="flex h-full items-center justify-center">
                    <div className="text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-400/30 border-t-blue-400" />
                        </div>

                        <p className="mt-4 text-sm font-medium text-slate-300">
                            Analyzing your code
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            Gemini is reviewing your implementation...
                        </p>

                    </div>
                </div>
            )}

            {analysis && (
                <div className="max-w-none text-sm leading-7 text-slate-300">
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => (
                                <h1 className="mb-4 mt-2 border-b border-slate-800 pb-3 text-xl font-semibold text-white">
                                    {children}
                                </h1>
                            ),

                            h2: ({ children }) => (
                                <h2 className="mb-3 mt-8 text-lg font-semibold text-white">
                                    {children}
                                </h2>
                            ),

                            h3: ({ children }) => (
                                <h3 className="mb-2 mt-6 text-base font-semibold text-slate-100">
                                    {children}
                                </h3>
                            ),

                            p: ({ children }) => (
                                <p className="mb-4 leading-7 text-slate-300">
                                    {children}
                                </p>
                            ),

                            ul: ({ children }) => (
                                <ul className="mb-5 ml-5 list-disc space-y-2 text-slate-300 marker:text-slate-600">
                                    {children}
                                </ul>
                            ),

                            ol: ({ children }) => (
                                <ol className="mb-5 ml-5 list-decimal space-y-2 text-slate-300 marker:text-slate-500">
                                    {children}
                                </ol>
                            ),

                            li: ({ children }) => (
                                <li className="pl-1 leading-7">
                                    {children}
                                </li>
                            ),

                            strong: ({ children }) => (
                                <strong className="font-semibold text-slate-100">
                                    {children}
                                </strong>
                            ),

                            code: ({ children }) => (
                                <code className="rounded-md border border-slate-800 bg-slate-950 px-1.5 py-0.5 font-mono text-[13px] text-blue-300">
                                    {children}
                                </code>
                            ),

                            pre: ({ children }) => (
                                <pre className="mb-6 mt-4 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4 font-mono text-[13px] leading-6 text-slate-300">
                                    {children}
                                </pre>
                            ),

                            blockquote: ({ children }) => (
                                <blockquote className="mb-5 border-l-2 border-blue-500/50 pl-4 text-slate-400">
                                    {children}
                                </blockquote>
                            ),

                            hr: () => (
                                <hr className="my-7 border-slate-800" />
                            ),
                        }}
                    >
                        {analysis}
                    </ReactMarkdown>
                </div>
            )}

            {!loading && !analysis && (
                <div className="flex h-full items-center justify-center">
                    <div className="max-w-sm text-center">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                            <span className="text-xl text-blue-400">
                                🔅
                            </span>
                        </div>

                        <h3 className="mt-4 text-sm font-semibold text-slate-200">
                            Ready to analyze
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Add some code in the editor and click{" "}
                            <span className="font-medium text-slate-400">
                                Analyze Code
                            </span>{" "}
                            to receive AI-powered insights.
                        </p>

                    </div>
                </div>
            )}

        </div>
    );
}

export default ResultPanel;