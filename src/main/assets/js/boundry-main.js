require([ 'config' ], function(config) {
	requirejs.config({
		baseUrl : config.resourceLocation,
		paths : {
			'angular' : 'lib/js/angular',
			'angular-resource' : 'lib/js/angular-resource',
			'domReady' : 'lib/js/domReady',
			'jquery' : 'lib/js/jquery',
			'bootstrap' : 'lib/js/bootstrap.min',
			'require' : 'lib/js/require'
		},
		shim : {
			'angular' : {
				deps : [ 'jquery' ],
				exports : 'angular'
			},
			'angular-resource' : [ 'angular' ],
			'bootstrap' : {
				deps : [ 'jquery' ]
			}
		}
	});
	require([ 'assets/js/boundry-bootstrap' ], function() {
	});
	require([ 'jquery', 'bootstrap', ], function($) {		
		return {};
	});
	
	
});