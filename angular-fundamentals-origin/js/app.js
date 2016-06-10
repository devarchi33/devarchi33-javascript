/**
 * Created by donghoon on 2016. 6. 10..
 */
angular.module("MainApp", [])
    .run(function () {
        console.log("My app is ready!");
    })
    .controller("MainCntrl", function ($scope) {
        $scope.greeting = "Hello My App!";

        $scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
            {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
            {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
            {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
            {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise"},
            {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"},
            {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
            {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
            {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
        ];

        $scope.currentCategory = null;

        function setCurrentCategory(category) {
            $scope.currentCategory = category;
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && $scope.currentCategory.name === category.name;
        }

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
    });
