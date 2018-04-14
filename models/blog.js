const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create blog schema & model
const BlogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  content: {
    type: String
  },
  categories: {
    type: Array
  },
  author: {
    type: String
  }
});

const Blog = mongoose.model('blog', BlogSchema);

module.exports = Blog;