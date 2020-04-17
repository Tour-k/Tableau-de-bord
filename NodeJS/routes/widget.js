const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const widgetCtrl = require('../controllers/widget');

router.post('/', auth, widgetCtrl.setWidget);
router.get('/:name', auth, widgetCtrl.getWidget);
router.post('/:name', auth, widgetCtrl.updateWidget);
router.delete('/:name', auth, widgetCtrl.deleteWidget);

module.exports = router;
