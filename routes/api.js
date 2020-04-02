const express = require('express');
const router = express.Router();
const moment = require('moment');
const blogModel = require('../models/blogModel');


router.get('/', function(req, res) {
  res.sendStatus(200);
});

router.get('/blogs', async function(req, res, next) {
  const blogData = await blogModel.getBlogEntries();
  blogData.forEach(blog => {
    blog.post_date = moment(blog.post_date).format('MMMM DD YYYY');
  });

  res.json(blogData);
});

module.exports = router;
