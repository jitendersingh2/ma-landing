(function(window, angular, undefined) {

    'use strict';


    angular
        .module('malanding.services.startUpGuideService', [

        ])
        .service('startUpGuideService', [
            '$window',
            '$http',
            '$q',
            'config',
            function($window, $http, $q, config) {

                var serviceUrl = config.services.startUpGuide,
                    downloadedFileName   = config.downloadPDFName;


                /**
                 * @ngdoc method
                 * @name download
                 * @methodOf malanding.services.startUpGuideService. : startUpGuideService
                 * @description Tracks an event.
                 * @returns {Object} promise promise
                 */
                this.download = function() {

                    var url         = serviceUrl,
                        contentType = 'application/pdf',
                        fileName    = downloadedFileName;

                    
                    return $http({
                        url: url,
                        method: 'GET',
                        responseType: 'blob'
                      })
                      .then(function(response) {
                        console.log('response- ', response);
                        var blobFile = new Blob([response['data']], { type: contentType });
                        console.log('blobFile- ', blobFile);      
                        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                          console.log('navigator..');
                          navigator.msSaveBlob(blobFile, fileName);
                        } else {
                          console.log('no navigator..');
                          var blobFileUrl = URL.createObjectURL(blobFile);
                          console.log('blobFileUrl- ', blobFileUrl);
                          var downloadLink = document.createElement("a");
                          downloadLink.setAttribute("href", blobFileUrl);
                          downloadLink.setAttribute("download", fileName);
                          downloadLink.style.visibility = "hidden";
                          document.body.appendChild(downloadLink);
                          downloadLink.click();
                          document.body.removeChild(downloadLink);
                        }
            
                        return response.data;
            
                      }, function(error) {
            
                          return $q.reject({});
                      });
                };

            }]);

})(this, window.angular);
