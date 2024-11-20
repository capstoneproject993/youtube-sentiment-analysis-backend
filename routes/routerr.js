const express = require('express');
const { getlinkedinComments,getyoutubeComments, getHistory} = require('../controllers/commentsController.js');
const { registerUser } = require('../controllers/authController.js');
const router = express.Router();

router.post('/linkedin', getlinkedinComments);

router.post('/youtube', getyoutubeComments);

router.post('/linkedin', getlinkedinComments);

router.post('/history', getHistory);

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
      await registerUser(email);
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'User registration failed' });
    }
  });

module.exports = router;
