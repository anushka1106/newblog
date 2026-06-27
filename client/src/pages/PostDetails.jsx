import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { ArrowLeft, Clock, User, Eye } from 'lucide-react';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center py-32 text-warm-dark/50 tracking-widest uppercase text-sm">Loading transmission...</div>;
  if (!post) return <div className="text-center py-32 text-warm-dark font-serif text-2xl">Post not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8">
      <Link to="/explore" className="inline-flex items-center text-warm-dark/60 hover:text-warm-dark transition-colors mb-10 text-sm tracking-widest uppercase">
        <ArrowLeft size={16} className="mr-2" />
        Back to Musings
      </Link>

      <div className="text-center mb-10">
        <div className="text-xs font-semibold text-[#8A9D81] uppercase tracking-[0.2em] mb-4">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-dark leading-tight mb-8">
          {post.title}
        </h1>
        <div className="flex items-center justify-center space-x-6 text-sm text-warm-dark/60">
          <span className="flex items-center"><User size={14} className="mr-2" /> {post.author?.username || 'Aura Guide'}</span>
          <span className="flex items-center"><Clock size={14} className="mr-2" /> {format(new Date(post.createdAt), 'MMMM dd, yyyy')}</span>
          <span className="flex items-center"><Eye size={14} className="mr-2" /> {post.views} views</span>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-16 rounded-[2rem] overflow-hidden shadow-sm relative">
        <div className="absolute inset-0 bg-[#E8D1C4]/20 animate-pulse -z-10"></div>
        <img 
          src={post.featuredImage || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564'} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-warm-dark prose-p:text-warm-dark/80 prose-p:font-light prose-p:leading-relaxed prose-a:text-[#C06C47] hover:prose-a:text-[#A35938]">
        {/* We use dangerouslySetInnerHTML because the content comes from a Rich Text Editor */}
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-16 pt-8 border-t border-warm-dark/10">
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-[#C9D1C2]/30 text-[#6B7F61] text-xs uppercase tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
