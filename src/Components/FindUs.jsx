import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn p-6 join-item justify-start gap-3 bg-blue-100 hover:bg-blue-200 text-blue-800">
          <span className="bg-blue-600 text-white p-2 rounded-full text-sm">
            <FaFacebookF />
          </span>
          Facebook
        </button>

        <button className="btn p-6 join-item justify-start gap-3 bg-sky-100 hover:bg-sky-200 text-sky-800">
          <span className="bg-sky-500 text-white p-2 rounded-full text-sm">
            <FaTwitter />
          </span>
          Twitter
        </button>

        <button className="btn p-6 join-item justify-start gap-3 bg-pink-100 hover:bg-pink-200 text-pink-800">
          <span className="bg-pink-500 text-white p-2 rounded-full text-sm">
            <FaInstagram />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
