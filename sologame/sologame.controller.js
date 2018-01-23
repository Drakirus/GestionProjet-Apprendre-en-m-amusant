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


    var token  = $rootScope.globals.currentUser.token;
    var svg    = null;
    var socket = null;
    var newGame;

    // init the ctrl
   initCtrl();

    // methods Public
    vm.place  = place;
    vm.reload = reload;
    vm.skip   = skip;


    function initCtrl(){

		}


})();
