define(['./index'], function(directives) {

	directives.directive('boundryNavbar', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
          menu: '='
      },
      link: function($scope, $element) {
         
      },
      template:  '<div class="navbar navbar-inverse navbar-fixed-top">'+
				  '<div class="navbar-inner">'+
				    '<div class="container-fluid">'+
				     ' <a class="brand" ng-href="#">Project Name Here</a>'+
				       ' <ul class="nav">'+
				         ' <li><a ng-href="#/home">Home <i class="icon-home icon-white"></i></a></li>'+
				         ' <li class="divider-vertical"></li>'+
				         ' <li class="divider-vertical"></li>'+
				         ' <li class="dropdown"><a ng-href="#" class="dropdown-toggle" data-toggle="dropdown">Reports<b class="caret"></b></a>'+
							'<ul class="dropdown-menu">'+
								'<li><a ng-href="#/boundry-list">Boundry List 1</a></li> '+
								'<li><a ng-href="#/boundry-list1">Boundry List 1</a></li>'+
							'</ul>'+
						'</li>'+
				        '</ul>'+
				    '</div>'+
				  '</div>'+
				'</div>'     
                    
    };
	});
});