angular.module('webAppFront', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('webAppFront').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/add-payment');


    $stateProvider
        .state('add-payment', {
            url: '/add-payment',
            controller:  'AddPaymentCtrl',
            templateUrl: 'partial/add-payment/add-payment.html'
        })
        .state('payment-list', {
            url: '/payment-list',
            controller:  'PaymentListCtrl',
            templateUrl: 'partial/payment-list/payment-list.html'
        })
        .state('who-should-pay-next', {
            url: '/who-should-pay-next',
            controller:  'AddPaymentCtrl',
            templateUrl: 'partial/add-payment/add-payment.html'
        });
});

angular.module('webAppFront').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
