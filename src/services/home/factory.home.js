(function(window, angular, undefined) {

    'use strict';

    /**
     * Demo factory. Brings all services under one factory for the front-end to utilize.
     *
     * @namespace Services
     * @class homeFactory
     */

    angular
        .module('malanding.services.homeFactory', [
            'malanding.services.startUpGuideService'
        ])
        .factory('homeFactory', [
            '$http',
            '$q',
            'startUpGuideService',
            function($http, $q, startUpGuideService) {

                var response;

                var rejectPromise = $q.reject();

                return {

                    downloadStartUpGuide: function() {

                        startUpGuideService.download();
                    }
                };
            }]);


})(this, window.angular);
