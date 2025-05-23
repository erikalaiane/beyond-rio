import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogsComp from '../components/Blogs/BlogsComp';

const BlogsDetails = () => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state || {};

  return (
    <div className="min-h-screen pt-20 bg-white text-blue-950">
      {/* Imagem de destaque */}
      <div className="w-full flex justify-center items-center py-10 bg-blue-950/5">
        <div className="transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-in-out">
          <div className="p-1 border-4 border-amber-400 rounded-xl shadow-2xl bg-white">
            <img
              src={image}
              alt={title}
              className="rounded-md max-h-[400px] object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Conteúdo do post */}
      <div className="container mx-auto px-4 py-5 max-w-3xl">
        <p className="text-sm text-slate-500 mb-2">
          Escrito por <span className="font-medium text-amber-600">{author}</span> em <span>{date}</span>
        </p>

        <h1 className="text-3xl font-bold mb-6 border-l-8 border-blue-950/50 pl-3">{title}</h1>

        <p className="text-lg leading-relaxed text-slate-800 whitespace-pre-line">
          {description}
        </p>
      </div>

      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
