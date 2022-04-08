const express = require('express');
const router = express.Router();

/**routes */
const blogRouter = require('./routes/blogRouter');
const commentRouter = require('./routes/commentRouter');
const userRouter = require('./routes/userRouter');

router.use(authenticate);
router.get('blogs', blogRouter);
router.get('/comments', commentRouter);
router.get('/users', userRouter);

module.export = router;
