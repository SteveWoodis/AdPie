 var app = angular.module('AdPieApp');
app.controller('loginCtrl', ['$scope','$http', function($scope, $http){

var found_user;
$scope.user = {
				email:"",
				password:"" 
			  };

console.log('You made it to loginCtrl');

var refresh = function(){
			$scope.user.email = "";
			$scope.user.password = "";

};
var refreshReg = function(){
			$scope.contact.email = "";
			$scope.contact.password = "";

};
refresh();

var user ;


$scope.login = function(){
	var data = "";
	user = $scope.user;
	console.log('user email', user.email);
	console.log('user password', user.password);

		$http.get('/customers').success(function(response){
		data = response;

	console.log('database email',data.email);
	console.log('database password',data.password);
		$scope.user = "";
		

	if(user.email === data.email){
		console.log('Success!')
	}	
	else
	{
		console.log('Sorry!');
	}
	});	
		
	refresh();
	
}//end of login function


	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/customers', $scope.contact).success(function(response){
			console.log(response);
			refreshReg();
		});	
	};

}])