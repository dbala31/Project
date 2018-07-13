const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const LeaderboardSchema = new Schema({
    users: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    },
});

module.exports = leaderboard = mongoose.model('leaderboard',LeaderboardSchema);