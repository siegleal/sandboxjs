var mongoose = require('mongoose');

module.exports = {
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
        })
        
    }
}
