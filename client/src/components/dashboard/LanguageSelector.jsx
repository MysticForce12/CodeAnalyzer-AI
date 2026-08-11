function LanguageSelector({language, setLanguage}){

    const languages = [
        { value: "javascript", label: "JavaScript" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
        { value: "cpp", label: "C++" },
    ];

    const handleLanguageChange = (e)=>{
        setLanguage(e.target.value);
    };

    return (
        <div className="flex flex-col gap-2">
            <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="w-48 cursor-pointer rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSelector;