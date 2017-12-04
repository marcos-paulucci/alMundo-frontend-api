module.exports = function(app){
    var hotelsController = require('./controllers/hotelsController');
    app.get('/hotels', hotelsController.findAll);
    app.get('/hotels/:id', hotelsController.findById);
    app.post('/hotels', hotelsController.create);
    app.put('/hotels/:id', hotelsController.update);
    app.delete('/hotels/:id', hotelsController.delete);
}