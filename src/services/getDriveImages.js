import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getDriveImages = async () => {
    try {
        const response = await axios.get(`${API_URL}/images`);
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export default getDriveImages;
