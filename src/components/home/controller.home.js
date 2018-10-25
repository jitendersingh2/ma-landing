(function(window, angular, undefined) {
  "use strict";

  /**
   * Home/Account Summary view controller.
   *
   * @namespace Controllers
   * @class homeCtrl
   */
  angular
    .module("malanding.controllers.homeCtrl", [
      
    ])
    .controller("homeCtrl", [
      "$http",
      '$q',
      "config",
      function(
        $http,
        $q,
        config
      ) {
        var self = this;
        var contentType = 'application/pdf';
        var fileName = config.downloadPDFName;
        var url = config.pdfUrl;
        
        this.downloadStartUpGuide = function() {
          console.log('downloading...');
          $http({
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
      }
    }
    ]);
})(this, window.angular);
