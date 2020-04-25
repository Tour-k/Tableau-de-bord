const instagramAnalytics = require('instagram-analytics');

exports.getInstaUserInfo = (req, res) => {
  let pseudo = req.params.username + "/";
  (async () => {
    await instagramAnalytics(pseudo)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json({ error }));
})();
};