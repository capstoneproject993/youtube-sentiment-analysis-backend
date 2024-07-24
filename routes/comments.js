const express = require('express');
const router = express.Router();
const { getlinkedinComments,getyoutubeComments} = require('../controllers/commentsController.js');

router.get('/linkedin', getlinkedinComments);

router.get('/youtube', getyoutubeComments);

module.exports = router;
