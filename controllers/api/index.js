const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
const commentsRoutes = require('./commentsRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes)

module.exports = router;
