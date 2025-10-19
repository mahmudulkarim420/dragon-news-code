import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={news.image_url} className="w-full object-contain rounded-md" />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 leading-snug mb-4">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
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
