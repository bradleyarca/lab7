var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.ren der('index', projects); 
};