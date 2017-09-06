var express = require('express');
var ApiController = require('./controllers/api');

module.exports = function(app){
  var apiRouter = express.Router();

  apiRouter.get('/persons/', ApiController.list);
  apiRouter.get('/persons/:id/', ApiController.detail);
  apiRouter.post('/persons/', ApiController.create);
  apiRouter.patch('/persons/:id/', ApiController.update);
  apiRouter.delete('/persons/:id/', ApiController.delete);

  app.use('/api', apiRouter);
};
