import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden max-w-4xl mx-auto my-6">
      
     
      <div className="w-full overflow-hidden rounded-t-xl">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[400px] object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-4">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          {news.details}
        </p>

        <div className="pt-4">
          <Link
            to={`/category/${news.category_id}`}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-pink-700 transition text-white px-5 py-2 rounded-md font-medium text-sm"
          >
            <FaArrowLeft /> All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
