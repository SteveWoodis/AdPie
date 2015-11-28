var app = angular.module('AdPieApp');
app.controller('loginCtrl', function($scope, $http){

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

$scope.login = login;
$scope.addContact = addContact;

function login(user){
	var data = "";

	$http.get('/customers/'+ user.email).success(function(response){
		data = response;

		if(user.email === data.email){
			console.log('Success!')
		}	
		else
		{
			throw Error('Sorry!');
		}
		refresh();
	});	

}//end of login function

function addContact(){
	console.log($scope.contact);
	$http.post('/customers', $scope.contact).success(function(response){
		console.log(response);
		refreshReg();
	});	
}//end of addContact
})