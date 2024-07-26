const express = require('express');
const router = express.Router();
const { getlinkedinComments } = require('../controllers/commentsController.js');

router.post('/linkedin', getlinkedinComments);

module.exports = router;
