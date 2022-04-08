const express = require('express');
const router = express.Router();

const user_controller = require('../controllersController');

/**user routes */
router.get('/', user_controller.user_list);
router.post('/:id/update', user_controller.user_update_post);
router.post('/:id/delete', user_controller.user_delete_post);
router.get('/:id', user_controller.user_details);
