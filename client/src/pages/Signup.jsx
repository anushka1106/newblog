import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Demo bypass
    setTimeout(() => {
      localStorage.setItem('token', 'dummy-token');
      navigate('/explore');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto py-32 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif text-warm-dark mb-4">Join the Journey</h1>
        <div className="w-12 h-0.5 bg-[#8A9D81] mx-auto rounded-full"></div>
      </div>

      <div className="bg-[#FDFBF7] p-10 rounded-[2rem] shadow-sm border border-warm-dark/5">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#8A9D81] text-warm-dark"
            />
          </div>
          <div className="pt-4">
            <button disabled={loading} type="submit" className="w-full bg-[#8A9D81] text-white text-sm uppercase tracking-widest font-bold px-6 py-4 rounded-full shadow-sm hover:bg-[#72836a] transition-colors disabled:opacity-50">
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-warm-dark/60">
          Already have an account? <Link to="/login" className="text-[#8A9D81] font-semibold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
