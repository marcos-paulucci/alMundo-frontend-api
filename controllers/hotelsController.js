var HotelsService = require('../services/hotelsService')
exports.findAll = function(req, res){
    var onResponse = function(filteredHotels){
        res.send(JSON.stringify(filteredHotels));
    };
    HotelsService.findAll({name: req.query.name, stars: req.query.stars}, onResponse);
};
exports.findById = function(req, res) {
    var onResponse = function(hotel){
        res.send(JSON.stringify(hotel));
    };
    HotelsService.findById(req.params.id, onResponse);
};
exports.create = function(req, res) {
    var hotel = req.body;
    var onResponse = function(){
        res.sendStatus(200);
    };
    HotelsService.create(hotel, onResponse);

};
exports.update = function(req, res) {
    var hotel = req.body;
    var onResponse = function(){
        res.sendStatus(200);
    };
    HotelsService.update(req.params.id, hotel, onResponse);

};
exports.delete = function(req, res) {
    var onResponse = function(){
        res.sendStatus(200);
    };
    HotelsService.remove(req.params.id, onResponse);
};