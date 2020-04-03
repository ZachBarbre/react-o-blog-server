const express = require('express');
const router = express.Router();
const moment = require('moment');
const blogModel = require('../models/blogModel');


router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/blogs', async (req, res) => {
  const blogData = await blogModel.getBlogEntries();
  blogData.forEach(blog => {
    blog.post_date = moment(blog.post_date).format('MMMM DD YYYY');
  });

  res.json(blogData).status(200);;
});

router.get('/blogs/:blogId?', async (req, res) => {
  const { blogId } = req.params; 

  const blogData = await blogModel.getOneBlog(blogId);
  blogData.post_date = moment(blogData.post_date).format('MMMM DD YYYY');

  const commentData = await blogModel.getBlogComments(blogId);
  commentData.forEach(comment => {
    comment.post_date = moment(comment.post_date).format('MMMM DD YYYY');
  });

  const singleBlog = {
    blog: blogData,
    comments: commentData
  }

  res.json(singleBlog).status(200);
})

module.exports = router;
