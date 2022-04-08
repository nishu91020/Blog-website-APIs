const express = require('express');
const router = express.Router();

const _controller = require('../controllers/Controller');

/** routes */
router.get('/', _controller._list);
router.post('/create', _controller._create_post);
router.post('/:id/update', _controller._update_post);
router.post('/:id/delete', _controller._delete_post);
router.get('/:id', _controller._details);
