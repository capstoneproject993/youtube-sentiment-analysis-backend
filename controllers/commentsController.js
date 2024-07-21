const axios = require('axios');

const getlinkedinComments = async (req, res) => {
  try {
    
    // const response = await axios.get(``);
    // res.json(response.data);
    res.json({'msg':'ok'});
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

module.exports = { getlinkedinComments };