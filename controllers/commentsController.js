const { status } = require("express/lib/response");
const axios = require('axios')
const Sentiment = require('../models/Sentiment'); 

const getlinkedinComments = async (req, res) => {
  const url = req.body.url
  const encodedUrl = encodeURIComponent(url);
  try {    
    axios.get(`http://127.0.0.1:5001/api/temp?url=${encodedUrl}`)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
      res.json({'error': error})
    });
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
};


const getyoutubeComments = async (req, res) => {
  const { email, url } = req.body;
  const encodedUrl = encodeURIComponent(url);

  const newSentiment = new Sentiment({
    email,
    title:null,
    link:url,
    positive:null,
    negative:null,
    neutral:null,
  });
  await newSentiment.save();
   
  try {    
    axios.get(`http://127.0.0.1:5001/api/youtube?url=${encodedUrl}`)
    .then(function (response) {
      count = response.data.sentiment_counts
      sum = count.negative + count.positive + count.neutral
      newSentiment['negative'] = (count.negative*100/sum).toFixed(2)
      newSentiment['neutral'] = (count.neutral*100/sum).toFixed(2)
      newSentiment['positive'] = (count.positive*100/sum).toFixed(2)
      newSentiment.save()
      res.json({
        newSentiment
      })
    })
    .catch(function (error) {
      console.log(error);
      res.json({'error': error})
    });
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
};

const getHistory = (req, res) => {
  const { email } = req.body;
  Sentiment.find({ email: email}) 
  .then((data) => {
    console.log(data);
    res.json(data);
  })
  .catch((error) => {
    console.error(error);
  });
}

module.exports = { getlinkedinComments, getyoutubeComments, getHistory };