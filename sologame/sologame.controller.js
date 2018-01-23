(function () {
  'use strict';

  angular
    .module('app')
    .controller('SoloGameController', SoloGameController);

  SoloGameController.$inject =
    ['UserService', 'FlashService', '$rootScope',
      '$location',     '$route',    '$uibModal',
      '$document',    '$window',     '$timeout',  '$scope'];

  function SoloGameController(
    UserService, FlashService,
    $rootScope,   $location,   $route,
     $uibModal,   $document,   $window, $timeout, $scope) {

    var vm = this;

    var newGame;
		// var image = "https://www.theyearinpictures.co.uk/images//image-placeholder.png";

    // methods Public
    vm.repondre  = repondre;
    vm.new  = newq;

    // init the ctrl
   initCtrl();

    function initCtrl(){
			newGame = {
				"calcul" : [
					{
						"url_image": "http://res.cloudinary.com/bdf/image/upload/v1422979850/umyosv2hpo4v6cxdcvvm.jpg",
						"response": 7,
						"proposition": [5,4,7,8],
						"question": "Combien il y a de dinosaures ?"
					}
					,{
						"url_image": "http://res.cloudinary.com/bdf/image/upload/c_fill,h_150,w_260/v1422979850/a7twsbalqszfdqnctw3f.jpg",
						"response": 5,
						"proposition": [7,2,3,5],
						"question": "Combien il y a d'ours en peluche ?"
					},
					{
						"url_image": "http://res.cloudinary.com/bdf/image/upload/v1422979850/un9dzblveitmenzb4da0.jpg",
						"response": 6,
						"proposition": [7,6,3,5],
						"question": "Combien il y a de ballon ?"
					}
				]
			}
			var rand = newGame["calcul"][Math.floor(Math.random() * newGame["calcul"].length)];

			vm.game = rand
		}

		vm.ok = false;
		vm.ko = false;

		vm.disable = false;

    function repondre(question, reponse){

		vm.ok = false;
		vm.ko = false;
			console.log(reponse);
			console.log(question);
			if (question['response'] == reponse){
				vm.ok = true;
				vm.info = "Bonne reponse"
			} else {
				vm.ko = true;
				vm.info = "Mauvaise reponse"
			}
    }

		function newq() {

			var randnest = newGame["calcul"][Math.floor(Math.random() * newGame["calcul"].length)];
			while(randnest == vm.game){
				randnest = newGame["calcul"][Math.floor(Math.random() * newGame["calcul"].length)];
			}
			vm.game = randnest

		vm.ok = false;
		vm.ko = false;

		}


	}

})();
