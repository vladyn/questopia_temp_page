/*global app*/
app.controller('AppController', ['$scope', function ($scope) {
	'use strict';
	$scope.texts = {
		en: {
			headingOne: "A real-life escape room which will blow your mind.",
			headingTwo: "We are opening soon!",
			headingThree: "Sofia, be ready for the challenge!",
		},
		bg: {
			headingOne: "Стая на загадките, която ще ви вземе акъла.",
			headingTwo: "Отваряме скоро!",
			headingThree: "София, подготви се за предизвикателството!",
		}, 
		lang: 'EN'
	}


	$scope.lang = $scope.lang || 'BG';


	$scope.toggleLang = function () {
		$scope.lang = $scope.lang === 'BG' ? 'EN' : 'BG';
		$scope.texts.lang = $scope.lang === 'BG' ? 'EN' : 'BG';
	}

}]);