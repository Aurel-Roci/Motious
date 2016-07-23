var myApp = angular.module('myApp.cardView', ['ngMaterial', 'ui.bootstrap', 'ngVis']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cardView', {
        templateUrl: 'cardView/cardView.html',
        controller: 'myCtrl'
    });
}]);

myApp.controller('myCtrl', function ($scope, $http, $uibModal) {
    $scope.projects = [];
    var url = 'https://www.motius.de/api/usecases/';
    $http.get(url)
        .then(function (result) {
            $scope.projects = result.data;
        });

    $scope.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };

    $scope.timeline = function (item) {
        if (item.milestones.length > 0) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'timeline/timeline.html',
                controller: 'timelineCtrl',
                resolve: {
                    item: function () {
                        return item;
                    }
                },
                size: 'lg'
            });
        }
    }
});