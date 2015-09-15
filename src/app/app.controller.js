angular.module('ngDevstack')

.controller('AppController', function ($rootScope, $scope) {
    'use strict';

    // handling UI Bootstrap Collapse plugin
    $scope.isCollapsed = true;

    var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | ng-devstack';
        }
    });
});
