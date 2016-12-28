(function () {
    'use strict';

    angular.module('galleryApp')
        .controller('HeaderCtrl', HeaderCtrl);

    function HeaderCtrl($scope) {
        console.log('header');
    }
})();