angular.module('ngDevstack')

.controller('AppController', function ($rootScope, $scope) {
    // handling UI Bootstrap Collapse plugin
    var vm = this;
    vm.isCollapsed = true;

    var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            vm.pageTitle = toState.data.pageTitle + ' | ng-devstack';
        }
    });
});
