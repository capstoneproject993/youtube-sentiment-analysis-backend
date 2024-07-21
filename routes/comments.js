const express = require('express');
const router = express.Router();
const { getlinkedinComments } = require('../controllers/commentsController.js');

router.get('/linkedin', getlinkedinComments);

module.exports = router;
