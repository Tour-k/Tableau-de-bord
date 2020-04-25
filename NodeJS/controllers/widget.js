const Widget = require('../models/widget');

exports.setWidget = (req, res) => {
    Widget.findOne({ name: req.body.name, userId: req.body.userId})
        .then(user => {
            if (user == undefined){
                const widget = new Widget({
                    name : req.body.name,
                    userId: req.body.userId,
                    refresh: req.body.refresh,
                    hidden: req.body.hidden,
                    params: req.body.params
            
                });
                widget.save()
                    .then(() => res.status(201).json({ message: 'widget créé !'}))
                    .catch(error => {
                        res.status(400).json({ error });
                        console.log(error)
                    });
            } else {
                Widget.updateOne({ name: req.body.name, userId: req.body.userId }, 
                    {
                        ...req.body
                    })   
                    .then(() => res.status(201).json({ message: 'widget updated !'}))
                    .catch(error => {
                        res.status(400).json({ error });
                        console.log(error)
                    });
            }
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getWidget = (req, res) => {
    Widget.findOne({ name: req.body.name, userId: req.body.userId })
        .then(widget => {
            res.status(200).json(widget)
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getAllWidget = (req, res) => {
    console.log('userId : ' + req.body.id)
    Widget.find({id: req.body.id})

        .then(widget => {
            console.log('ALL WIDGETS :');
            console.log(widget);
            res.status(200).json(widget);

        })
        .catch(error => {
            console.log(error);
            res.status(400).json(error);
        })
}

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
