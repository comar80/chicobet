import axios from "axios";

const FOLDER_ID = import.meta.env.VITE_IMAGE_FOLDER_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const getDriveImages = async () => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name)`
        );

        console.log("Response:", response.data.files);

        return response.data.files.map(file => ({
            name: file.name,
            url: `https://lh3.googleusercontent.com/d/${file.id}=w1000`

        }));
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export default getDriveImages;
