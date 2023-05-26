import axios from "axios";
const API__FAKE = "https://minibackend-cine-app-production.up.railway.app/";
const endpointCiudades = "ciudades";

export const getCiudades = async () => {
    try {
        const { data } = await axios.get(`${API__FAKE}${endpointCiudades}`)
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getCityCinema = async (idCity, idTeatro) => {
    try {
        const { data } = await axios.get(`${API__FAKE}${endpointCiudades}?id=${idCity}`)

        const theater = data[0].teatros.find(item => item.id === idTeatro)

        const infoFuncion = {
            city: data.name,
            cinema: theater.name,
        };
        return infoFuncion;
    } catch (error) {
        console.log(error);
        return {};
    }
}