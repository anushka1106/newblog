import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import BlogCard from '../components/BlogCard';

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  
  const categories = ['All', 'Earth Connection', 'Nature Therapy', 'Sacred Spaces', 'Slow Living'];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        let url = `${import.meta.env.VITE_API_URL}/posts?`;
        if (search) url += `search=${search}&`;
        if (category !== 'All') url += `category=${category}&`;
        
        const res = await axios.get(url);
        setPosts(res.data.posts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    const timer = setTimeout(() => {
      fetchPosts();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [search, category]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const token = localStorage.getItem('token') || 'test-token';
        await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${id}`, {
          headers: { 'x-auth-token': token }
        });
        setPosts(posts.filter(p => p._id !== id));
        toast.success('Musing deleted successfully.');
      } catch (err) {
        console.error(err);
        toast.error('Failed to delete post.');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-warm-dark mb-6">
          Latest Musings
        </h1>
        <p className="text-warm-dark/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Explore thoughts on slow living, intentional home design, and mindful productivity.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Search musings..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark font-light placeholder-warm-dark/40"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                  category === cat 
                    ? 'bg-warm-dark text-white' 
                    : 'bg-transparent border border-warm-dark/20 text-warm-dark/70 hover:border-[#F26C4F] hover:text-[#F26C4F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="text-warm-dark/50 text-center uppercase tracking-widest text-sm py-20">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-warm-dark/50 text-center py-20 font-serif text-2xl">No musings found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {posts.map(post => (
            <BlogCard key={post._id} post={post} isAuthor={true} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
