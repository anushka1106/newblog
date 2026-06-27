import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-warm-dark mb-6 tracking-wide">Get in Touch</h1>
        <div className="w-16 h-0.5 bg-[#C06C47] mx-auto rounded-full opacity-60"></div>
        <p className="mt-8 text-warm-dark/70 text-lg font-light max-w-2xl mx-auto">
          Whether you want to collaborate, share a story, or just say hello—I'd love to hear from you.
        </p>
      </div>
      
      <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2rem] shadow-sm max-w-5xl mx-auto border border-warm-dark/5 relative overflow-hidden flex flex-col md:flex-row gap-12">
        
        {/* Contact Details Section */}
        <div className="w-full md:w-1/3 flex flex-col space-y-8 border-b md:border-b-0 md:border-r border-warm-dark/10 pb-8 md:pb-0 md:pr-8">
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C06C47] mb-2">Location</h3>
            <p className="text-warm-dark/80 font-light text-lg">
              123 Serenity Lane,<br />
              Portland, OR 97205
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C06C47] mb-2">General Inquiries</h3>
            <p className="text-warm-dark/80 font-light text-lg">
              hello@aura-earth.com
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C06C47] mb-2">Collaborations</h3>
            <p className="text-warm-dark/80 font-light text-lg">
              partners@aura-earth.com
            </p>
          </div>
          <div className="pt-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-warm-dark/40 mb-4">Follow the Journey</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-warm-dark/20 flex items-center justify-center text-warm-dark/60 hover:text-[#C06C47] hover:border-[#C06C47] transition-all">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-warm-dark/20 flex items-center justify-center text-warm-dark/60 hover:text-[#C06C47] hover:border-[#C06C47] transition-all">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-warm-dark/20 flex items-center justify-center text-warm-dark/60 hover:text-[#C06C47] hover:border-[#C06C47] transition-all">
                PT
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif text-[#8A9D81] mb-4">Message Received</h3>
              <p className="text-warm-dark/70 font-light">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-warm-dark/20 py-3 focus:outline-none focus:border-[#C06C47] transition-colors text-warm-dark"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-warm-dark/20 py-3 focus:outline-none focus:border-[#C06C47] transition-colors text-warm-dark"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold tracking-widest uppercase text-warm-dark/60 mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-warm-dark/20 py-3 focus:outline-none focus:border-[#C06C47] transition-colors text-warm-dark resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="pt-4 text-center md:text-left">
                <button type="submit" className="bg-[#C06C47] text-white text-sm uppercase tracking-widest font-bold px-12 py-4 rounded-full shadow-sm hover:bg-[#A35938] transition-colors w-full md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
