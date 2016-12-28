(function () {
    'use strict';

    angular.module('galleryApp')
        .config(galleryAppConfig);

    function galleryAppConfig($stateProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('Main', {
                abstract: true,
                views: {
                    header: {
                        templateUrl: 'app/pages/common/templates/main-header.tpl.html',
                        controller: 'HeaderCtrl',
                        controllerAs: 'vm'
                    },
                    '': {
                        template: '<ui-view layout="column" flex layout-fill/>'
                    },
                    footer: {
                        // templateUrl: 'app/pages/common/templates/main-footer.tpl.html'
                    }
                },
                data: {
                    requireLogin: true
                }
            })
            .state('Main.Home', {
                url: '/',
                templateUrl: 'app/pages/common/templates/start-page.tpl.html',
                controller: 'StartPageCtrl',
                controllerAs: 'vm'
            });
    }
})();
