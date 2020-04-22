const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const widgetCtrl = require('../controllers/widget');

router.post('/', auth, widgetCtrl.setWidget);
router.get('/:id', auth, widgetCtrl.getWidget);
router.post('/:id', auth, widgetCtrl.updateWidget);
router.delete('/:id', auth, widgetCtrl.deleteWidget);

module.exports = router;
