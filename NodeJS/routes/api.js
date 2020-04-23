const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const apiExtCtrl = require('../controllers/apiExt');

router.get('/insta/:username', apiExtCtrl.getInstaUserInfo);

module.exports = router;
