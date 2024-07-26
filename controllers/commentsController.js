const { status } = require("express/lib/response");
const axios = require('axios')

const getlinkedinComments = async (req, res) => {
  const url = req.body.url
  const encodedUrl = encodeURIComponent(url);
  try {    
    axios.get(`http://127.0.0.1:5001/api/linkedin?url=${encodedUrl}`)
    .then(function (response) {
      // console.log(response.data);
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

module.exports = { getlinkedinComments };