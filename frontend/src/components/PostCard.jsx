import React from 'react';

const PostCard = ({ title, subtitle, author, views, image }) => {
  return (
    <div className="bg-white rounded-md shadow p-4 mb-6">
      <img src={image} alt="Post" className="rounded-md mb-4 h-[200px] w-[100%] object-cover" />
      <h2 className="text-xl font-semibold mb-2">📝 Article</h2>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{subtitle}</p>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>{author}</span>
        <span>👁 {views} views</span>
      </div>
    </div>
  );
};

export default PostCard;
