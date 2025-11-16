import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

// Function to get all videos
export const getVideos = async () => {
    try {
        const response = await axios.get(`${API_URL}/videos`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching videos: ' + error.message);
    }
};

// Function to get a single video by ID
export const getVideoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/videos/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching video: ' + error.message);
    }
};

// Function to upload a new video
export const uploadVideo = async (videoData, token) => {
    try {
        const response = await axios.post(`${API_URL}/videos`, videoData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading video: ' + error.message);
    }
};

// Function to get comments for a video
export const getComments = async (videoId) => {
    try {
        const response = await axios.get(`${API_URL}/videos/${videoId}/comments`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching comments: ' + error.message);
    }
};

// Function to post a comment
export const postComment = async (videoId, commentData, token) => {
    try {
        const response = await axios.post(`${API_URL}/videos/${videoId}/comments`, commentData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error posting comment: ' + error.message);
    }
};