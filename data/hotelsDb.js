var Datastore = require('nedb')
    , db = new Datastore({ filename: './hotelsDbFile' });
const hotelsData = require('./data.json');

module.exports = function(){
    db.loadDatabase();
    db.remove({}, { multi: true }, function (err, numRemoved) {
    });

    db.insert(hotelsData, function (err, newDocs) {});
    return db;
};
