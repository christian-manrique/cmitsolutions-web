'use strict';

/**
 * @ngdoc function
 * @name inteApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the inteApp
 */
angular.module('FrontendApp')
	.filter('showHTML', function($sce) {
		return function(val) {
		///	console.log(val);
			
	    	return $sce.trustAsHtml(val );
		};
	})
  .controller('IndexCtrl', function ($rootScope,$scope,$filter,$http,$timeout){//$rootScope,$scope,$http, $window,$cookies,$location, $sce, $anchorScroll,$routeParams,getTokenAuth,webservices) {
   		$scope.loading =  false;
    	$scope.logEnvio ="";
    	$scope.logError ="";
    	
   		//setTimeout(function () {
			$(document).ready(function(){//equalHeight($('.slider_sidebar2 ul'));
				$('.flexslider').flexslider({
					animation: "slide"
				});
				
				if($(window).width() > 992){
					var waypoint = new Waypoint({
						element: $('.section-premio'),
						handler: function(direction) {
							if(direction=='down'){
								$('.sticky-menu').addClass('shown');
							} else {
								$('.sticky-menu').removeClass('shown');
							}
						}
					})
				}
			});
		//}, 500);
   		
   		$scope.submitForm = function(isValid) {
			//console.log("asdsad"+isValid);
    		if (isValid) {
				$scope.loading =  true;
						
				$timeout(function() {
					$scope.loading =  false;
				},300);
			
				var url ='/backend/email.php';
			
				var formData = {
						   name: $scope.form.name,
						   company: $scope.form.company,
						   phone: $scope.form.phone,
						   email: $scope.form.email	,
						   msg: $scope.form.message				   
						};
				console.log(formData);
				$http.post(url, JSON.stringify(formData)).success(function(data,status,headers){
					$scope.logError ="";
					$scope.logEnvio =data;
				});
			}else{
				$scope.logError ="Please fill up the form to send the contact message, thanks";
			}
   		};
   		 
  });