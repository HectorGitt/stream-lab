import axios from "axios";
import tmdbConfig from "./tmdbConfig";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: tmdbConfig.base_url,
    headers: {
        'Content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: tmdbConfig.api_key})
})

//intercept requests or responses before they are handled by then or catch.
axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
    });



export default axiosClient;