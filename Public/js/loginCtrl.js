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
refresh();

var user ;


$scope.login = function(){
	var data = "";
	user = $scope.user;
	console.log('user email', user.email);
	console.log('user password', user.password);

		$http.get('/customer').success(function(response){
		data = response;

	console.log('database email',data.email);
	console.log('database password',data.password);
		$scope.user = "";
		

	if(user.email !== data.email){
		console.log('Sorry!')
	}	
	else
	{
		console.log('Success!');
	}
	});	
		
	refresh();
	
}//end of login function

//console.log(found_user);

}])