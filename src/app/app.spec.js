/* jshint ignore: start */

ngDescribe({
    name: 'is current url',
    modules: 'ngDevstack',
    controllers: 'AppController',
    inject: ['$location'],
    tests: function (deps) {
        // should pass a dummy test
        it('has location service', function () {
            expect(typeof deps.$location).toEqual('object');
        });

        // deps.AppController is the $scope object injected into AppController
        it('is a scope for controller', function () {
            expect(deps.AppController).toBeTruthy();
            expect(typeof deps.AppController).toEqual('object');
        });
    }
});

/* jshint ignore: end */
