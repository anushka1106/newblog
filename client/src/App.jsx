import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DynamicBackground from './components/DynamicBackground';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-32">
      <h1 className="text-5xl md:text-7xl font-serif text-warm-dark mb-6 leading-tight">
        Curating a Life <br /> Well Lived
      </h1>
      <p className="text-xl text-warm-dark/70 font-light max-w-2xl mb-12 leading-relaxed">
        Join me in exploring mindful productivity, simple recipes, and the art of slowing down.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link to="/explore" className="bg-[#D99A7A] text-white text-sm uppercase tracking-widest font-bold px-10 py-4 rounded-full shadow-sm hover:bg-[#c48564] transition-colors">
          Explore Posts
        </Link>
        <Link to="/about" className="bg-transparent border border-warm-dark/20 text-warm-dark text-sm uppercase tracking-widest font-bold px-10 py-4 rounded-full hover:bg-warm-dark/5 transition-colors">
          Meet The Author
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{
        className: 'font-light tracking-wide text-sm text-warm-dark bg-[#FDFBF7] border border-warm-dark/10 shadow-sm rounded-xl px-6 py-4',
        duration: 4000,
      }} />
      <DynamicBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/write" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
