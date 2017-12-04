var db = require('../data/hotelsDb')();
var getHotels = function(onDone){
    db.find({}, onDone);
};
var findAll = function(filters, callback){
    var onDone = function(err, results) {
        var result =  results.filter(function(hotel){
            var validName = hotel.name.indexOf(filters.name) >= 0,
                validNumStars = filters.stars.length === 0 || filters.stars.indexOf(hotel.stars) >= 0
            return validName && validNumStars;
        });
        callback(result);
    };
    getHotels(onDone);
};
var findById = function(id, callback) {
    var onDone = function(err, allHotels) {
        var hotel = allHotels.find(function(h){
            return h.id === id;
        });
        callback(hotel);
    };
    getHotels(onDone);
};

var create = function(hotelData, callback) {
    var onDone = function(err, data) {
        callback(true);
    };
    db.insert(hotelData, onDone);
};

var update = function(id, hotelData, callback) {
    var onDone = function(err, data) {
        callback(true);
    };
    db.update({ id: id }, hotelData, { upsert: true }, onDone)
};

var remove = function(id, callback) {
    var onDone = function(err, data) {
        callback(true);
    };
    db.remove({ id: id }, { multi: true }, onDone)
};

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;