import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // For demo purposes, we will just bypass real authentication
    // but in a real app you would POST to /api/auth and get a token.
    setTimeout(() => {
      localStorage.setItem('token', 'dummy-token');
      navigate('/explore');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto py-32 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif text-warm-dark mb-4">Welcome Back</h1>
        <div className="w-12 h-0.5 bg-[#C06C47] mx-auto rounded-full"></div>
      </div>

      <div className="bg-[#FDFBF7] p-10 rounded-[2rem] shadow-sm border border-warm-dark/5">
        {error && <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              className="w-full bg-transparent border-b border-warm-dark/20 py-2 focus:outline-none focus:border-[#C06C47] text-warm-dark"
            />
          </div>
          <div className="pt-4">
            <button disabled={loading} type="submit" className="w-full bg-[#C06C47] text-white text-sm uppercase tracking-widest font-bold px-6 py-4 rounded-full shadow-sm hover:bg-[#A35938] transition-colors disabled:opacity-50">
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-warm-dark/60">
          Don't have an account? <Link to="/signup" className="text-[#C06C47] font-semibold hover:underline">Create one</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
