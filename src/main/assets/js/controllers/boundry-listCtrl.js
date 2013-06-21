define([ './index', 'config' ], function(controllers, config) {

	controllers.controller('boundry-listCtrl', [ '$scope', function($scope) {

		$scope.pageName = "Boundry Reports";
		$scope.sortingOrder = 'name';
		$scope.reverse = false;
		$scope.filteredItems = [];
		$scope.groupedItems = [];
		$scope.itemsPerPage = 20;
		$scope.pagedItems = [];
		$scope.currentPage = 0;

		$scope.items = "";

		$scope.fetchBoundryList = function() {
						
			$scope.items = [{"id":145,"name":"boundry","address":"38 melbourne"},{"id":250,"name":"boundry","address":"38 melbourne"}];
		};

		$scope.fetchBoundryList();
		

	} ]);
});