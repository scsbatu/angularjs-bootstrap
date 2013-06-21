define([ './index', 'config' ], function(controllers, config) {

	controllers.controller('searchCtrl', [ '$scope', '$filter', function($scope, $filter) {

		var searchMatch = function(haystack, needle) {
			if (!needle) {
				return true;
			}

			var intValue = parseInt(haystack);
			if (intValue == Number.NaN) {
				return false;
			}
			var haystackString = new String(haystack);
			return haystackString.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
		};

		// init the filtered items
		$scope.search = function() {
			getData();
		};

		$scope.searchButton = function() {
			getData();
		};

		// calculate page in place
		$scope.groupToPages = function() {
			$scope.pagedItems = [];

			for ( var i = 0; i < $scope.filteredItems.length; i++) {
				if (i % $scope.itemsPerPage === 0) {
					$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
				} else {
					$scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
				}
			}
		};

		$scope.range = function(start, end) {
			var ret = [];
			if (!end) {
				end = start;
				start = 0;
			}
			for ( var i = start; i < end; i++) {
				ret.push(i);
			}
			return ret;
		};

		$scope.prevPage = function() {
			if ($scope.currentPage > 0) {
				$scope.currentPage--;
			}
		};

		$scope.nextPage = function() {
			if ($scope.currentPage < $scope.pagedItems.length - 1) {
				$scope.currentPage++;
			}
		};

		$scope.setPage = function() {
			$scope.currentPage = this.n;
		};

		// functions have been describe process
		// the data for display
		$scope.search();
		$scope.searchButton();

		// change sorting order
		$scope.sort_by = function(newSortingOrder) {
			if ($scope.sortingOrder == newSortingOrder)
				$scope.reverse = !$scope.reverse;

			$scope.sortingOrder = newSortingOrder;

			// icon setup
			$('th i').each(function() {
				// icon reset
				$(this).removeClass().addClass('icon-sort');
			});
			if ($scope.reverse)
				$('th.' + new_sorting_order + ' i').removeClass().addClass('icon-chevron-up');
			else
				$('th.' + new_sorting_order + ' i').removeClass().addClass('icon-chevron-down');
		};

		$scope.resetError = function() {
			$scope.error = false;
			$scope.errorMessage = '';
		};

		$scope.setError = function(message) {
			$scope.error = true;
			$scope.errorMessage = message;
		};

		function getData() {
			$scope.filteredItems = $filter('filter')($scope.items, function(item) {
				for ( var attr in item) {
					if (searchMatch(item[attr], $scope.query))
						return true;
				}
				return false;
			});
			// take care of the sorting order
			if ($scope.sortingOrder !== '') {
				$scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
			}
			$scope.currentPage = 0;
			// now group by pages
			$scope.groupToPages();
		}

	}

	]);
});
