import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block">
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="relative">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
