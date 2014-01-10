/*
 * Get Dependencies
 */
var Model = require('../models/Model');

/*
 * Find all results in the db
 * @param request
 * @param response
 * @returns JSON
 */

exports.findAll = function(request, response) {
  Model.find({}, function(error, result){
    response.json(result);
  });
};

/*
 * Read a result from the db and return it as JSON
 * @param request
 * @param response
 * @returns JSON
 */

exports.find = function(request, response) {
  Model.find({ 'clean' : request.params.name }, function(error, result){
    response.json(result)
  });
};

/*
 * Create a new result and save them to the db
 * @param request
 * @param response
 */

exports.save = function(request, response) {

  var result = new Model({
    name: request.body.name,
    clean: request.body.name.split(' ').join('-')
  })

  result.save(function(error, result){
    if(error) return handleError(error);
    response.json(result)
  })
};

/*
 * Update a result in the db
 * @param request
 * @param response
 */

exports.update = function(request, response) {
  Model.update(
    {
      clean: request.params.name
    },
    {
      name: request.body.name,
      clean: request.body.name.split(' ').join('-')
    },
    function (error, numberAffected, raw) {
      if (err) return handleError(err);
      console.log('The number of updated documents was %d', numberAffected);
      console.log('The raw response from Mongo was ', raw);
    });
};

/*
 * Remove a result from the db
 * @param request
 * @param response
 */

exports.remove = function(request, response) {
  Model.remove({ 'clean' : request.params.name }, function(error, result){
     if(error) {
      return next(error)
    }
    response.json(result)
  });
};
