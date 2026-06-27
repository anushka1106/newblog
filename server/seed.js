const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('./models/Post');
const User = require('./models/User');

dotenv.config();

const auraAndEarthPosts = [
  {
    title: "Grounding Practices for a Disconnected World",
    description: "How connecting barefoot with the Earth's surface can realign your energy, reduce inflammation, and restore your natural aura.",
    category: "Earth Connection",
    featuredImage: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Understanding Your Aura Colors",
    description: "A deep dive into what the different colors of your energetic field mean, and how they shift with your emotional states.",
    category: "Energy Healing",
    featuredImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Healing Power of Crystals",
    description: "From Amethyst to Rose Quartz: exploring the ancient wisdom of earth's minerals and how they interact with human energy.",
    category: "Earth Magic",
    featuredImage: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Forest Bathing: Nature's Therapy",
    description: "Discover the Japanese practice of Shinrin-yoku and how spending intentional time among trees can cleanse your energetic field.",
    category: "Nature Therapy",
    featuredImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cleansing Your Space with Earth Elements",
    description: "Using sage, palo santo, and natural ventilation to clear stagnant energy and invite a fresh, earthy aura into your home.",
    category: "Sacred Spaces",
    featuredImage: "https://images.unsplash.com/photo-1533221379796-03f6fdb35661?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Solstice Shift: Aligning with the Seasons",
    description: "How tuning into the Earth's natural cycles and equinoxes can bring balance and flow to your personal energy.",
    category: "Earth Connection",
    featuredImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Meditations for Root Chakra Balancing",
    description: "Connect deeply with the Earth element through these guided visualizations designed to anchor your root chakra.",
    category: "Energy Healing",
    featuredImage: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Herbal Alchemy: Potions from the Soil",
    description: "Crafting natural teas and tinctures from organic herbs to soothe the spirit and nourish the physical body.",
    category: "Earth Magic",
    featuredImage: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Protecting Your Energetic Field in Crowds",
    description: "Techniques for empaths to shield their aura and stay grounded when navigating busy, high-energy environments.",
    category: "Energy Healing",
    featuredImage: "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Sound of the Earth: Healing Frequencies",
    description: "Exploring the Schumann Resonance and how 432Hz soundscapes can synchronize your brainwaves with the planet.",
    category: "Nature Therapy",
    featuredImage: "https://images.unsplash.com/photo-1516280440502-3c224eb976c6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Moon Rituals for Energetic Release",
    description: "Harnessing the gravitational pull of the moon to let go of old patterns and cleanse your aura during the full moon phase.",
    category: "Sacred Spaces",
    featuredImage: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cultivating a Mindful Garden",
    description: "Why the act of planting seeds and getting your hands in the dirt is one of the most powerful ways to bond with the Earth.",
    category: "Earth Connection",
    featuredImage: "https://images.unsplash.com/photo-1466692476877-6a6838b9d3fc?auto=format&fit=crop&q=80&w=800",
  }
];

const seedPosts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding');

    await Post.deleteMany();
    await User.deleteMany();

    const user = new User({
      username: 'aura_guide',
      password: 'password123'
    });
    await user.save();

    const generatedPosts = auraAndEarthPosts.map(post => ({
      ...post,
      content: `<p>Full content for ${post.title}. This post dives deeply into the connections between our energetic auras and the grounding forces of the Earth.</p>`,
      tags: ["aura", "earth", "spirituality", "nature"],
      author: user._id
    }));

    await Post.insertMany(generatedPosts);
    console.log('12 Aura & Earth Posts seeded successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedPosts();
