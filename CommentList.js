import React, { useEffect, useState } from 'react';
import { getComments } from '../services/api';

const CommentList = ({ videoId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments = await getComments(videoId);
            setComments(fetchedComments);
        };

        fetchComments();
    }, [videoId]);

    return (
        <div className="comment-list">
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <p><strong>{comment.author}</strong>: {comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;