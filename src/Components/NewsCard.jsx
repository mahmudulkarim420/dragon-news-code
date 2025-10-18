import React, { useState } from 'react';
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, author, rating, total_view } = news;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto">
      <div className="flex items-center justify-between p-4 bg-base-300 mb-3 rounded-t-md">
        <div className="flex items-center">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h4 className="text-sm font-semibold">{author?.name}</h4>
            <p className="text-xs text-gray-500">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-600 text-lg">
          <button className="hover:text-blue-500" title="Save">
            <FaRegBookmark />
          </button>
          <button className="hover:text-blue-500" title="Share">
            <FaShareAlt />
          </button>
        </div>
      </div>

      <h2 className="text-lg font-bold px-4 pb-2 text-gray-800">{title}</h2>

      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="px-4 py-3 text-sm text-gray-600">
        {isExpanded ? details : `${details.slice(0, 150)}...`}
        {details.length > 150 && (
          <button
            onClick={toggleReadMore}
            className="ml-2 text-yellow-500 font-semibold hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      <div className="px-4 py-3 flex justify-between items-center border-t text-sm">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < rating.number ? 'text-yellow-500' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
