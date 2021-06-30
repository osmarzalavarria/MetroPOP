const metroApi = "http://www.omdbapi.com/?i=tt3896198&apikey=443e6fde&s=all";

export const fetchMetroPOP = async() => {
    try{
        const endpoint = metroApi;
        const response = await fetch(endpoint);
        const data = await response.json();
        
        return data;
    }
    catch (error){
        console.log(error);
        return {count: 0};
    }
}

export default fetchMetroPOP;