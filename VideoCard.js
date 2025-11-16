import React from 'react';

const VideoCard = ({ video, onClick }) => {
    return (
        <div className="video-card" onClick={() => onClick(video.id)}>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <span className="video-views">{video.views} views</span>
            </div>
        </div>
    );
};

export default VideoCard;