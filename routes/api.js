const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// get a list of blogs from the db
router.get('/blogs', function(req, res, next) {
  Blog.find().then(function(blogs) {
    res.send(blogs);
  }).catch(next);
});

// get a blog from the db
router.get('/blogs/:id', function(req, res, next) {
  Blog.findById({ _id: req.params.id }).then(function(blog) {
    res.send(blog);
  }).catch(next);
});

// add a new blog to the db
router.post('/blogs', function(req, res, next) {
  Blog.create(req.body).then(function(blog) {
    res.send(blog);
  }).catch(next);
});

// update a blog in the db
router.put('/blogs/:id', function(req, res, next) {
  Blog.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Blog.findOne({ _id: req.params.id }).then(function(blog) {
      res.send(blog);
    }).catch(next);
  });
});

// delete a blog from the db
router.delete('/blogs/:id', function(req, res, next) {
  Blog.findByIdAndRemove({ _id: req.params.id }).then(function(blog) {
    res.send(blog);
  }).catch(next);
});

module.exports = router;