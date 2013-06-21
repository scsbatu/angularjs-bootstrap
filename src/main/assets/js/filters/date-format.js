define([ './index', 'config' ], function(filters, config) {
	filters.filter('dateFormat', function() {
		return function(dateString) {
			var mydate = new Date(dateString);
			return mydate.toDateString();
		};
	});
});