const express = require('express');
const router = express.Router();
const { getlinkedinComments,getyoutubeComments} = require('../controllers/commentsController.js');

router.post('/linkedin', getlinkedinComments);

router.post('/youtube', getyoutubeComments);
router.post('/linkedin', getlinkedinComments);

module.exports = router;
