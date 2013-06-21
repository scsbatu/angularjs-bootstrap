define(['assets/js/boundry-app', 'config'], function (boundry, config) {
    'use strict';

    boundry.config(['$routeProvider',function($routeProvider) {    	   	
    	$routeProvider.when('/home', {
    		controller : 'homeCtrl',
    		templateUrl : config.resourceLocation +'assets/templates/home.html'
    	}).when('/boundry-list', {
    		controller : 'boundry-listCtrl',
    		templateUrl : config.resourceLocation +'assets/templates/boundry-list.html'
    	}).otherwise({
    		redirectTo : '/home'
    	});    
    
    }]);
});

