/**
* Christian Manrique garcia
*app.js file declared the routing application (list, new, edit, home)
*/


angular
  .module('FrontendApp', ['ngRoute'])
  .config(function ($routeProvider,$locationProvider,$compileProvider, $httpProvider) {
		$compileProvider.debugInfoEnabled(false);
		$routeProvider
		  .when('/', {
			  templateUrl: '/app/modules/home/home.html',
			  controller: 'IndexCtrl',
			  controllerAs: 'home'
			})
		  .when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl',
			controllerAs: 'about'
		  })
		
		  .otherwise({
			redirectTo: '/'
		  });
		  
		$locationProvider.html5Mode(true).hashPrefix('!');
  });

