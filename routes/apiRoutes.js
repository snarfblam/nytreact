var express = require('express');
var db = require('../models');
var status = require('../util/httpStatus').all;

var router = express.Router();

router.get('/test', (req, res, next) => {
    res.send('all systems green');
});

router.get('/saved', (req, res, next) => {
    db.savedItem.find().then(datums => {
        //console.log(datums);
        var objs = datums.map(datum => datum.toObject());
        res.json(objs);
    }).catch(err => {
        console.log(err);
        res.status(status.Internal_Server_Error);
    })
});
router.post('/saved', (req, res, next) => {
    db.savedItem.create({
        url: req.body.url,
        title: req.body.title,
        summary: req.body.summary,
    }).then(result => {
        res.json({ result: 'created', value: result.toObject() });
    }).catch(err => {
        console.log(err);
        if (err.name == "ValidationError") {
            res.json({ result: 'error', error: 'Invalid or duplicate data' });
        }else {
            res.status(status.Internal_Server_Error);
        }    
    });
});
router.delete('/saved/:id', (req, res, next) => {
    db.savedItem.deleteOne({
        _id: req.params.id
    }).then(result => {
        if (result.n) {
            res.json({ result: 'deleted' });
        } else {
            res.json({ result: 'error', error: 'id not found' });
        }
    }).catch(err => {
        console.log(err);
        res.status(status.Internal_Server_Error);
    });
});
module.exports = router;
