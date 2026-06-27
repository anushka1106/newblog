const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('./models/Post');

dotenv.config();

const fixImages = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for fixing images');

    const posts = await Post.find();
    for (let i = 0; i < posts.length; i++) {
      // Use a reliable picsum URL seeded with the index so they stay consistent
      // You can also use specific categories but picsum is mostly landscapes/nature anyway
      posts[i].featuredImage = `https://picsum.photos/seed/aura${i}/800/600`;
      await posts[i].save();
    }

    console.log('Fixed all post images!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

fixImages();
