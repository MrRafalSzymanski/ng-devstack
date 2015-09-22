angular.module('ngDevstack.home')

.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            'main': {
                controller: 'HomeController',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
});
