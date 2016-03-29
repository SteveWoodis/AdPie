var app = angular.module('AdPieApp');
app.controller('content_CreatorCtrl', function($scope){
	$scope.contentRegister = contentRegister;
	
	function contentRegister(user){
		console.log('You made it to contentRegister!');
		console.log(user);
	}
})