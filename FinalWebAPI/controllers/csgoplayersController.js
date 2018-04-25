var CSGOPlayer = require('../models/csgoplayers')

exports.player_list = function(req, res, next) {
    CSGOPlayer.find({}, function(error, players){
        var playerArray = [];
        var list = {
            "@context" : "http://schema.org/",
            "@type" : "CreativeWork",
            "name" : "Players",
            "url" : "http://localhost:8000",
            "member" : playerArray
        }

        for (x = 0; x < players.length; x++) {
            playerArray.push({
                "@type" : "Person",
                "name" : players[x].name,
                "url" : "http://localhost:8000" + players[x].url
            })
        }
        res.send(list)
    });
}

exports.player_detail = function(req, res, next) {
    CSGOPlayer.findById(req.params.id, function (error, player_object){
        var person = {
            "@context" : "http://schema.org/",
            "@type" : "Person",
            "name" : player_object.name,
            "url" : "http://localhost:8000" + player_object.url,
            "additionalName" : player_object.ingameName,
            "birthDate" : player_object.birthDate,
            "memberOf" : player_object.teamName
        }
        res.send(person) 
    });
}