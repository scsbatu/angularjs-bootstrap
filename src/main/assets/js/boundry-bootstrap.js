define([
    'require',
    'angular',
    'assets/js/boundry-app',
    'assets/js/boundry-routes',
    'assets/js/boundry-impl'
], function (require, angular) {
    //'use strict';
	 require(['domReady!'], function (document) {
	        return angular.bootstrap(document, ['boundry']);
	 });
   
});


