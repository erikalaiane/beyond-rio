import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <Link
      to={`/blogs/${title}`}
      onClick={() => window.scrollTo(0, 0)}
      state={{ image, date, title, description, author }}
      className="block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden select-none"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="px-5 py-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2 font-semibold">
          <span>{date}</span>
          <span>by {author}</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-1 transition-colors duration-300 hover:text-blue-700">
          {title}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
