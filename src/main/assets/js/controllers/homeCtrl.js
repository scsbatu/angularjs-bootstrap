define([ './index', 'config' ], function(controllers, config) {
	controllers.controller('homeCtrl', [ '$scope', function($scope) {
		$scope.pageName = "Sample Anguler Bootstrap Home";
		$scope.pageDescription = "This is a sample project";
		
	} ]);
});
