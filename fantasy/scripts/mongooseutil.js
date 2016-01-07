var mongoose = require('mongoose');

module.exports = {
    url: 'mongodb://localhost:27017/fantasy',
    "schemas": {
        "transactionSchema": mongoose.Schema({
            "raw": String,
            "team": String,
            "type": String,
            "to": String,
            "from": String,
            "date": {
                month: String,
                day: String,
                year: Number,
                time: String,
                date: Date,
                week: Number
            },
            "player": {
                name: String,
                team: String,
                position: String
            }
        }),
        userSchema: mongoose.Schema({
            name: String,
            abbr: String
        }),
        playerSchema: mongoose.Schema({
            name: String,
            position: String,
            team: String,
        })
    }
}
