const express = require('express');
const router = express.Router();
const Leaderboard = require('../../untitled10/Leaderboard');


function leaderboard() {
    router.get('/save', (req, res) => {

        const newLeaderboard = new Leaderboard({
            users: req.body.userid,
            point: req.body.points
        });
        newLeaderboard.save().then(post => res.json(post));
    });

    router.get('/all', (req, res) => {
        const errors = {};
        Leaderboard.find()
            .sort({points: -1})
            .then(leaderboards => {
                if (!leaderboards) {
                    errors.noprofile = 'There are no users';
                    return res.status(404).json();
                }
                res.json(profiles);
            })
            .catch(err => res.status(404).json({profile: 'There are no users'}));
    });
}
module.exports = router;
