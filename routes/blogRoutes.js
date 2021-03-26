const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');



router.get('/', blogController.blog_index);

router.get('/create', blogController.blog_create)

router.post('/', blogController.blog_new);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;