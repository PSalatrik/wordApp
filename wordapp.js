

angular.module("myModule",[])
	.controller('myCtrl', function($scope, $interval){
		$scope.Heading = "My Word App";
		$scope.class = "red";
		
		$scope.randomWords = [
		'bob ', 
		'shoop ', 
		'yeah ',  
		'he ', 
		'la ', 
		'woop ',
		'be '
		];

		$scope.randomClass = [
		"red ",
		"blue ",
		"size ",
		"font ",
		"spin "


		]

		$scope.wordsOnPage = [];



		$scope.talk = function(){
			var functions = [addBlackWord, addDecoratedWord];
			function rando() {
				 return functions [Math.floor(Math.random() * functions.length)]();
			}
			$interval(rando, 500);
		
	};

		function addBlackWord() {
			var newElement = {};
			newElement.word= $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
			newElement.decor= "";
			$scope.wordsOnPage.push(newElement)
		};

		 function addDecoratedWord(){
			var newElement = {};
			newElement.word= $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
			newElement.decor= $scope.randomClass[Math.floor(Math.random()* $scope.randomClass.length)];
			$scope.wordsOnPage.push(newElement)
		};


				
	});