(function() {
  "use strict";

  angular.module("app").controller("pagesCtrl",function($scope, $http){

 		window.$scope = $scope;
  	
  	$scope.setup = function() {
			$http.get("/messages").then(function(response) {
				$scope.messages = response.data;
				console.log("hi")
 			});
 		};
 	// 	$scope.addMessage = function(inputName,inputSlogan,inputPhone) {
 	// 		var companyToSave = {
 	// 			name: inputName,
 	// 			slogan: inputSlogan,
 	// 			phone: inputPhone
 	// 		};
 	// 		$http.post("/companies", companyToSave).then(function(response) {
 	// 			var newCompany = response.data;
 	// 			$scope.companies.push(response.data);
 	// 			$scope.inputName = "";
 	// 			$scope.inputSlogan = "";
 	// 			$scope.inputPhone = "";
 	// 			$scope.errors = [];
 	// 		}, function(responseErrors) {
 	// 			console.log(responseErrors);
 	// 			$scope.errors = responseErrors.data.errors;
 	// 		});
 	// 	};
  	
  	// $scope.messages = [];

  	$scope.addMessage = function(veryNewMessage) {
 			// for this if statement, since empty strings are falsey in Javascript (not in ruby, though!), instead of saying if (newMessage !== ""), I can say:
 			// if(newMessage) {
 				// console.log(veryNewMessage);
 				var usernameSpan = document.getElementById('username');
	 			var messageToSave = {
	 				chat_id: 1,
	 				username: usernameSpan.innerHTML,
	 				text: veryNewMessage
	 			};
	 			console.log(messageToSave);
	 			$http.post("/messages", messageToSave).then(function(response) {
	 				// var newMessage = messageToSave;
	 				// $scope.messages.push(messageToSave);
	 				$http.get("/messages").then(function(response) {
						$scope.messages = response.data;
 					});
	 				$scope.veryNewMessage = "";
	 				$scope.errors = [];
	 			}, function(responseErrors) {
	 				console.log(responseErrors);
	 				$scope.errors = responseErrors.data.errors;
	 			});
 				// $scope.messages.push({text: newMessage});
 				// $scope.veryNewMessage = "";
 			// }
 		}


  });

}());