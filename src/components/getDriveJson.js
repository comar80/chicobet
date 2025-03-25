import axios from "axios";

const CARD_FOLDER_ID = import.meta.env.VITE_CARD_FOLDER_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const getDriveJson = async () => {
    try {
        const folderResponse = await axios.get(
            `https://www.googleapis.com/drive/v3/files?q='${CARD_FOLDER_ID}'+in+parents+and+mimeType='application/json'&key=${API_KEY}&fields=files(id,name)`
        );

        const files = folderResponse.data.files;
        if (!files || files.length === 0) {
            console.warn("No JSON files found in the folder.");
            return [];
        }

        const cardPromises = files.map(async (file) => {
            const fileResponse = await axios.get(
                `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`
            );
            return fileResponse.data;
        });

        const cardsData = await Promise.all(cardPromises);
        return cardsData;

    } catch (error) {
        console.error("Error fetching JSON files:", error);
        return [];
    }
};

export default getDriveJson;
