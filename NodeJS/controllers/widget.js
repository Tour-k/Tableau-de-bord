const Widget = require('../models/widget');

exports.setWidget = (req, res) => {
    const widget = new Widget({
        name : req.body.name,
        userId: req.body.userId,
        refresh: req.body.refresh,
        hidden: req.body.hidden,
        params: req.body.params,
        numDashboard: req.body.numDashboard,
        serviceId : req.body.serviceId,
        widgetId: req.body.widgetId
    });
    widget.save()
        .then((widget) => res.status(201).json(widget))
        .catch(error => {
            res.status(400).json({ error });
            console.log(error)
        });
};

exports.getWidget = (req, res) => {
    Widget.findOne({ _id: req.body.id })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
};

exports.updateWidget = (req, res) => {
    Widget.updateOne({ _id: req.params.id }, {params: req.body.params})
        .then(() => res.status(200).json({ message: 'Widget modifié !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteWidget = (req, res) => {
    Widget.deleteOne({ name: req.params.name})
        .then(() => { res.status(200).json({ message: 'Deleted!' }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};


exports.getWidgetsByDashboardId = (req, res) => {
    Widget.find({userId : req.body.userId, numDashboard : req.body.numDashboard})
        .then((widgets) => {
            // console.log(widgets);
            res.status(200).json(widgets)
        })
        .catch((erreur)=>{
            res.status(400).json(erreur)
        })
}