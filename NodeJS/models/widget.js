const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
    name: { type: String, required: true },
    refresh: { type: Number, default: 3000, required: false },
    hidden: { type: Boolean, default: false, required: false }
});

module.exports = mongoose.model('Widget', widgetSchema);
