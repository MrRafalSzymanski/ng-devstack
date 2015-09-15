angular.module('ngDevstack.about')

.config(function ($stateProvider) {
    'use strict';

    $stateProvider.state('about', {
        url: '/about/',
        views: {
            'main': {
                controller: 'AboutController',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data: {
            pageTitle: 'About'
        }
    });
});
