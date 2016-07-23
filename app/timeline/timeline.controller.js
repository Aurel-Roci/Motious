/**
 * Created by aurel on 23-Jul-16.
 */
var app = angular.module('myApp.timeline', ['ui.bootstrap', 'ngVis']);


app.controller('timelineCtrl', function ($scope, $uibModalInstance, item) {
    $scope.events = {};

    $scope.options = {
        "align": "center",
        "autoResize": true,
        "editable": true,
        "selectable": true,
        "orientation": "bottom",
        "showCurrentTime": true,
        "showMajorLabels": true,
        "showMinorLabels": true
    };
    //set the data to match the vis timeline format
    var milestones = [];
    for (var c in item.milestones) {
        var obj = item.milestones[c];
        milestones.push({
            "id": obj.id,
            "content": obj.name,
            "start": obj.start_date,
            "end": obj.end_date
        });
    }

    $scope.data = new vis.DataSet(milestones);

    $scope.dismiss = function () {
        $uibModalInstance.dismiss();
    };
});
