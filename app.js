require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const commentRoutes = require('./routes/comments.js');

// Use routes
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
