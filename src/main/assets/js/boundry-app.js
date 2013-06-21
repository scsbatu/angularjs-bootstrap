define([ 'angular', 'config', 'require', 'assets/js/controllers/index', 'assets/js/directives/index', 'assets/js/filters/index', 'assets/js/services/index' ], function(angular) {
	'use strict';
	return angular.module('boundry', [ 'boundry.services', 'boundry.controllers', 'boundry.filters', 'boundry.directives' ]);

});
