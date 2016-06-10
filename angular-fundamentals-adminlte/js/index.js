/**
 * Created by donghoon on 2016. 6. 9..
 */

angular.module("MainApp", [])
    .run(function () {
        console.log("My App is ready!");
    })
    .controller('MainCntrl', function ($scope) {

        $scope.hello = "Hello World!";
    });
