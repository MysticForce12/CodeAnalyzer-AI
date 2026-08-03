import api from "../api/axios";

const analysisService = {
    analyze: async(language, code)=>{
        const response = await api.post("/analysis/analyze",{
            language,
            code,
        });
        return response.data;
    },
};

export default analysisService;