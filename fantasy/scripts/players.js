module.exports = function(req, res){

    var result = [];
    var pos = req.params.pos;
    var utils = require('./mongooseutil');

    var Player = mongoose.model('Player', utils.schemas.playerSchema);
    var errors = [];
    var onSave = function(err, user){
        if (err) {
            console.error(err);
            errors.push(err);
        }
    };

    var findCallback = function(err, players){
        if (err) return console.error(err);
        if (players.length == 0){
            var transCallback = function(err, transactions){
                if (err) return console.error(err);
                transactions.forEach(function(trans, index, arr){
                    //this is where any manipulation goes
                    var player = new Player(trans);
                    result.push(player);
                    player.save(onSave);
                });
                if (errors.length == 0){ //avoid infinite loop 
                performSearch();
                }else{
                    res.json({errors: errors});
                }
            };

            var Trans = mongoose.model('Transaction', utils.schemas.transactionSchema);
            Trans.distinct('player',transCallback);

        }else{
            res.json({players: players});
        }

    }

    var performSearch = function(){
        if (pos){
            Player.find({position: pos}).select({__v:0}).exec(findCallback);
        }else{
            Player.find().select({__v:0}).exec(findCallback);
        }
    }

    performSearch();

}
