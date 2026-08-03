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

    return(
        <div>
            <select value={language} onChange={handleLanguageChange}>
                {languages.map((language)=>(
                    <option key={language.value} value={language.value}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSelector;