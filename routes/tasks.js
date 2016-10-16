var express = require ('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://zouba:avril1989@ds059306.mlab.com:59306/mytaskslist_zouba', ['tasks']);

// Get all tasks
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if(err){
            res.send(err);
        }
        res.json(tasks);
    })
});

// Get single task
router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({_id: mongojs.ObjectID(req.params.id)}, function (err, task) {
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

module.exports = router;