(function() {
  "use strict";

  angular.module("app").controller("pagesCtrl",function($scope){

  	window.$scope = $scope;
  	
  	$scope.messages = [];

  	$scope.addMessage = function(newMessage) {
 			// for this if statement, since empty strings are falsey in Javascript (not in ruby, though!), instead of saying if (newMessage !== ""), I can say:
 			if(newMessage) {
 				$scope.messages.push({text: newMessage});
 				$scope.veryNewMessage = "";
 			}
 		}


  });

}());