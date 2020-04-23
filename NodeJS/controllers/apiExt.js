const instagramAnalytics = require('instagram-analytics');

exports.getInstaUserInfo = (req, res) => {
  
  (async () => {
    await instagramAnalytics('difractomusic')
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json({ error }));
})();
};