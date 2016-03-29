var app = angular.module('AdPieApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
        templateUrl: 'login.html',
        controller:'loginCtrl'
    }).when('/business', {
        templateUrl: '/business.html',
        controller: 'BusinessCtrl'
    }).when('/customers', {
        templateUrl: '/customers.html',
        controller: 'customersCtrl'
    }).when('/content_Creator', {
        templateUrl: '/content_Creator.html',
        controller: 'content_CreatorCtrl'
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