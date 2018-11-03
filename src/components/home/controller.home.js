(function(window, angular, undefined) {
  "use strict";

  /**
   * Home/Account malanding view controller.
   *
   * @namespace Controllers
   * @class homeCtrl
   */
  angular
    .module("malanding.controllers.homeCtrl", [
      'malanding.services.homeFactory'
    ])
    .controller("homeCtrl", [
      'homeFactory',
      function(
        homeFactory
      ) {
        var self = this;
                
        this.downloadStartUpGuide = function() {
          console.log('downloading pdf');
          homeFactory.downloadStartUpGuide();
        }
    }
    ]);
})(this, window.angular);
