import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase'; // Assuming firebase.js exports the config

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadVideo = async (file) => {
    const storageRef = ref(storage, `videos/${file.name}`);
    try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading video: ", error);
        throw error;
    }
};

export const getVideoUrl = async (videoPath) => {
    const videoRef = ref(storage, videoPath);
    try {
        const url = await getDownloadURL(videoRef);
        return url;
    } catch (error) {
        console.error("Error retrieving video URL: ", error);
        throw error;
    }
};