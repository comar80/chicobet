import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getCardsJson = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        return response.data.reverse();
    } catch (error) {
        console.error("Error fetching cards JSON:", error);
        return [];
    }
};

export default getCardsJson;