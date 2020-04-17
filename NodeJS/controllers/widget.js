const Widget = require('../models/widget');

exports.setWidget = (req, res) => {
    const widget = new Widget({
        name: req.body.name,
        refresh: req.body.refresh,
        hidden: req.body.hidden
    });
    widget.save()
        .then(() => res.statue(201).json({ message: 'widget créé !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getWidget = (req, res) => {
    Widget.findOne({ name: req.body.name })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
};

exports.updateWidget = (req, res) => {
    Widget.updateOne({ name: req.params.name }, { ...req.body, name: req.params.name })
        .then(() => res.status(200).json({ message: 'Widget modifié !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteWidget = (req, res) => {
    Widget.deleteOne({ name: req.params.name})
        .then(() => { res.status(200).json({ message: 'Deleted!' }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};
