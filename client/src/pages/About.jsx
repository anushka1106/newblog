import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-warm-dark mb-6 tracking-wide">About Aura & Earth</h1>
        <div className="w-16 h-0.5 bg-[#C06C47] mx-auto rounded-full opacity-60"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-[#E8D1C4] rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
            alt="Author portrait" 
            className="rounded-[2rem] w-full h-[600px] object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 text-warm-dark/80 leading-relaxed font-light text-lg">
          <p>
            Hello, and welcome to Aura & Earth. I'm so glad you found your way here. 
            My journey into mindful living and energetic healing began years ago when I realized that moving through life on autopilot was draining my natural vitality.
          </p>
          <p>
            I created this space as a sanctuary—a digital haven where we can explore the deep connections between our physical environments, our spiritual energy, and the natural world around us. 
          </p>
          <p>
            Whether I'm writing about the grounding magic of a forest walk (Nature Therapy), the subtle frequencies of healing crystals, or simply how to create a more intentional morning routine (Sacred Spaces), my goal is always to help you reconnect with your highest self.
          </p>
          <div className="border-l-4 border-[#8A9D81] pl-6 my-6">
            <p className="font-serif italic text-2xl text-warm-dark">
              "We are not separate from the Earth; we are a living extension of its energy."
            </p>
          </div>
          <p>
            Take a breath, slow down, and stay a while.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
