const Video = require('../models/videowithinModel');

module.exports = {
  get: (req, res) => {
    console.log('videowithin get req body', req.body);
    Video.get(req.body, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};
