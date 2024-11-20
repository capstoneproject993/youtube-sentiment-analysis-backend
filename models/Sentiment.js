const mongoose = require('mongoose');

const sentimentSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true, // Ensure email is lowercase for consistency
  },
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  positive: {
    type: Number,
    min: 0,
    max: 100, // Assuming percentages
  },
  negative: {
    type: Number,
    min: 0,
    max: 100, // Assuming percentages
  },
  neutral: {
    type: Number,
    min: 0,
    max: 100, // Assuming percentages
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Sentiment = mongoose.model('Sentiment', sentimentSchema);

module.exports = Sentiment;
