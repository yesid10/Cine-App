import axios from "axios";

const URL_API = "https://api.themoviedb.org/3/movie/now_playing";
const  API_KEY  = "7d288d0a4605de4354e1e9ac9eca0b74"
    

export const getMovies = async () => {
    try {
        const { data } = await axios.get(`${URL_API}?api_key=${API_KEY}&language=es-ES`)
        return data;

    } catch (error) {
        console.log(error);
        return [];
    }
};

