var app = angular.module('AdPieApp');
app.controller('registerCtrl', function($scope, $http, $location){
$scope.contact = {};

var refreshReg = function(){
			$scope.contact.Username = "";
			$scope.contact.email = "";
			$scope.contact.password = "";
			$scope.contact.Full_Name = "";
			$scope.contact.regUser = "";
			$scope.contact.Creator_Category = "";	
			$scope.contact.Creator_Sub_Category = "";
			$scope.contact.Work_Experience = "";
			$scope.contact.Porfolio = "";
			$scope.contact.Links = "";
};

//refreshReg();

$scope.UserType = [
		{clientId: 0, clientType: 'None'},
        {clientId: 1, clientType: 'Business'},
        {clientId: 2, clientType: 'Content Creator'}
    ];

$scope.UserType.clientId = 0;

$scope.addContact = addContact;

function addContact(){
	console.log($scope.contact);
	$http.post('/customers', $scope.contact).success(function(response){
		console.log(response);
		$location.path('/landing');
		refreshReg();
	});	
}//end of addContact


function addContact(){
	console.log($scope.contact);
	$http.post('/customers', $scope.contact).success(function(response){
		console.log(response);
		refreshReg();
	});
	}

})