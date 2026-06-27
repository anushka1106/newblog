import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    tags: '',
    featuredImage: ''
  });
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${id}`);
        const post = res.data;
        setFormData({
          title: post.title,
          category: post.category,
          description: post.description,
          tags: post.tags ? post.tags.join(', ') : '',
          featuredImage: post.featuredImage
        });
        setContent(post.content);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load post data.');
      } finally {
        setInitialLoad(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token') || 'test-token';
      const payload = { ...formData, content };
      
      await axios.put(`${import.meta.env.VITE_API_URL}/posts/${id}`, payload, {
        headers: { 'x-auth-token': token }
      });
      toast.success('Musing updated successfully.');
      navigate(`/post/${id}`);
    } catch (err) {
      console.error(err);
      toast.error('Failed to update post. Check console.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoad) return <div className="text-center py-32 text-warm-dark/50 tracking-widest uppercase text-sm">Loading editor...</div>;

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-warm-dark mb-4">Edit Musings</h1>
        <div className="w-16 h-0.5 bg-[#C06C47] mx-auto rounded-full"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-warm-dark/5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Title</label>
            <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-lg font-serif" />
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Category</label>
            <input type="text" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Image URL</label>
          <input type="url" required value={formData.featuredImage} onChange={e => setFormData({...formData, featuredImage: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark" />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Short Description</label>
          <textarea required rows="2" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark resize-none"></textarea>
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Tags</label>
          <input type="text" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark" />
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-warm-dark/60 mb-4">Content</label>
          <div className="bg-white rounded-xl overflow-hidden border border-warm-dark/10">
             <textarea required rows="10" value={content} onChange={e => setContent(e.target.value)} className="w-full p-4 bg-transparent focus:outline-none focus:border-[#C06C47] text-warm-dark resize-y min-h-[250px]"></textarea>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button disabled={loading} type="submit" className="bg-[#C06C47] text-white text-sm uppercase tracking-widest font-bold px-10 py-4 rounded-full shadow-sm hover:bg-[#A35938] transition-colors disabled:opacity-50">
            {loading ? 'Saving...' : 'Update Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
