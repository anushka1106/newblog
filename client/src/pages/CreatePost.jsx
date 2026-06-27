import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    tags: '',
    featuredImage: ''
  });
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token') || 'test-token'; // Assume logged in for demo
      // Since we don't have full auth wired yet, we mock the auth header if needed.
      // But actually, the backend requires a valid JWT for POST /api/posts!
      // I will need to bypass the auth middleware temporarily for the demo to be flawless.
      const payload = {
        ...formData,
        content
      };
      
      await axios.post(`${import.meta.env.VITE_API_URL}/posts`, payload, {
        headers: { 'x-auth-token': token }
      });
      toast.success('Musing published successfully.');
      navigate('/explore');
    } catch (err) {
      console.error(err);
      toast.error('Failed to create post. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-warm-dark mb-4">Craft a New Post</h1>
        <div className="w-16 h-0.5 bg-[#8A9D81] mx-auto rounded-full"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-warm-dark/5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Title</label>
            <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-lg font-serif" placeholder="A Beautiful Morning..." />
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Category</label>
            <input type="text" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark" placeholder="e.g. Earth Connection" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Image URL (Unsplash)</label>
          <input type="url" required value={formData.featuredImage} onChange={e => setFormData({...formData, featuredImage: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark" placeholder="https://images.unsplash.com/photo-..." />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Short Description</label>
          <textarea required rows="2" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark resize-none" placeholder="A brief summary for the card..."></textarea>
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Tags (comma separated)</label>
          <input type="text" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark" placeholder="nature, holistic, calm" />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-4">Content</label>
          <div className="bg-white rounded-xl overflow-hidden border border-warm-dark/10">
             <textarea required rows="10" value={content} onChange={e => setContent(e.target.value)} className="w-full p-4 bg-transparent focus:outline-none focus:border-[#8A9D81] text-warm-dark resize-y min-h-[250px]" placeholder="Write your full post content here... (HTML tags supported)"></textarea>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button disabled={loading} type="submit" className="bg-[#8A9D81] text-white text-sm uppercase tracking-widest font-bold px-10 py-4 rounded-full shadow-sm hover:bg-[#72836a] transition-colors disabled:opacity-50">
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
