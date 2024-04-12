const router = require('express').Router();
const Activity = require('../models/activitylist.model');

router.route('/').get((req, res) => {
    Activity
    .find()
    .then((activities) => res.json(activities))
                    .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/add').post(async(req, res) => {
    const activity =req.body.activity;
    const newActivity = await new Activity({
        activity,
    })

    console.log(newActivity);
    newActivity.save()
                .then(() => res.json('Activity added'))
                .catch((err) => res.status(400).json('error: ' + err));
})

router.route('/:id').get((req, res) => {
    console.log("id" + req.params.id);
    Activity.findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json('error: ' + err));
})

router.route('/delete/:id').delete(async(req, res) => {
    console.log('delete logged');
    await Activity.findByIdAndDelete(req.params.id)
    .then(() => res.json('activity deleted'))
    .catch((err) => res.status(400).json('Error' + err));

})

router.route('/update/:id').post(async(req, res) => {
    console.log(req.params.id);
    await Activity.findById(req.params.id)
    .then((activityforedit) => {
        activityforedit.activity = req.body.activity;

        activityforedit.save().then(()=>res.json('Activity updated')).catch((err) => res.status(400).json('Error' + err));
    })
    .catch((err) => res.status(400).json('error' + err));
})

module.exports = router;