import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-warm-beige/80 backdrop-blur-md sticky top-0 z-50 px-6 py-5 border-b border-warm-dark/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-medium tracking-[0.3em] uppercase text-warm-dark">
          Aura & Earth
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-sm tracking-wider uppercase text-warm-dark/70 hover:text-warm-dark transition-colors">Home</Link>
          <Link to="/explore" className="text-sm tracking-wider uppercase text-warm-dark/70 hover:text-warm-dark transition-colors">Read</Link>
          <Link to="/about" className="text-sm tracking-wider uppercase text-warm-dark/70 hover:text-warm-dark transition-colors">About</Link>
          <Link to="/contact" className="text-sm tracking-wider uppercase text-warm-dark/70 hover:text-warm-dark transition-colors">Contact</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/login" className="text-sm tracking-wider uppercase text-warm-dark/70 hover:text-warm-dark transition-colors">Login</Link>
          <Link to="/write" className="text-sm tracking-wider uppercase bg-warm-dark text-white px-6 py-2 rounded-full hover:bg-black transition-colors">Write</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-warm-dark" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
           <Link to="/" className="text-sm tracking-wider uppercase text-warm-dark/80">Home</Link>
           <Link to="/explore" className="text-sm tracking-wider uppercase text-warm-dark/80">Read</Link>
           <Link to="/login" className="text-sm tracking-wider uppercase font-bold text-warm-dark">Login / Write</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
