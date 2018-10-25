(function (window, angular, undefined) {

    'use strict';

    /**
     * Create a configuration object shared between all modules.
     *
     * @namespace Constant
     * @class config
     */
    angular
        .module('malanding.config', [])
        .constant('config', {

            namespace: 'malanding',
            analytics: false,
            debug: true,
            appUrlRoot: '/members/secure/account/erusurvey/',
            servicesTimeout: 120000,
            pdfUrl: '/assets/members/secure/apps/malanding/images/U14314-2018-Medicare-Advantage-Onboarding-Guide-r001.pdf',
            downloadPDFName: 'Start-up Guide',
            services: {
                dataCapture: '/members/services/sec/touchpoints'
            },
            partials: {
                viewHome: '/components/home/view.home.htm',
                partsDir: '/components/home/partials/'
            }
        });

})(this, window.angular);
