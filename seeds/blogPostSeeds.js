const sequelize = require('../config/connection');
const BlogPost = require('../models/blogPost');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await BlogPost.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();