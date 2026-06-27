import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';

const BlogCard = ({ post, isAuthor, onDelete }) => {
  return (
    <div className="flex flex-col h-full group bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-[2.5rem] shadow-sm border border-white/50 hover:shadow-md transition-shadow">
      <div className="h-56 md:h-64 overflow-hidden rounded-[2rem] mb-6 relative">
        <img 
          src={post.featuredImage || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564'} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      <div className="flex flex-col flex-grow px-2">
        <div className="text-[10px] sm:text-xs font-semibold text-warm-dark/60 uppercase tracking-[0.2em] mb-3">
          {post.category}
        </div>
        
        <h3 className="text-2xl font-serif text-warm-dark mb-3 leading-snug">
          <Link to={`/post/${post._id}`} className="hover:opacity-70 transition-opacity">{post.title}</Link>
        </h3>
        
        <p className="text-warm-dark/70 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <Link to={`/post/${post._id}`} className="inline-block bg-[#F26C4F] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#D45A40] transition-colors">
            Read More
          </Link>

          {isAuthor && (
            <div className="flex space-x-4 text-warm-dark/50">
                <Link to={`/edit/${post._id}`} className="hover:text-warm-dark transition-colors" title="Edit Post">
                  <Pencil size={18} />
                </Link>
                <button onClick={() => onDelete(post._id)} className="hover:text-red-500 transition-colors" title="Delete Post">
                  <Trash2 size={18} />
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
