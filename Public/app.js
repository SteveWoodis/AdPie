var app = angular.module('AdPieApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'login.html',
		controller:'loginCtrl'
	}).when('/business', {
        templateUrl: '/business.html',
        controller: 'businessCtrl'
    }).when('/customers', {
        templateUrl: '/customers.html',
        controller: 'customersCtrl'
    }).when('/consultants', {
        templateUrl: '/consultants.html',
        controller: 'consultantsCtrl'
    }).when('/about', {
        templateUrl: '/about.html',
        controller: 'aboutCtrl'
    })	
    .when('/register', {
        templateUrl: 'register.html',
        controller: 'registerCtrl'
    })
	.when('/landing', {
        templateUrl: '/landing.html',
        controller: 'landingCtrl'
    })
	.otherwise({
        redirectTo: '/landing'
    })
});