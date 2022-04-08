const express = require('express');
const router = express.Router();

const blog_controller = require('../controllers/blogController');

/**blog routes */
router.get('/', blog_controller.blog_list);
router.post('/create', blog_controller.blog_create_post);
router.post('/:id/update', blog_controller.blog_update_post);
router.post('/:id/delete', blog_controller.blog_delete_post);
router.get('/:id', blog_controller.blog_details);
