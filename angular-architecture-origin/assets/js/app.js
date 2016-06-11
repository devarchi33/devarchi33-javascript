/**
 * Created by donghoon on 2016. 6. 10..
 */
angular.module("Devarchi33App", [
    'categories',
    'categories.bookmarks'
])
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

            cancelCreating();
            cancelEditing();
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && $scope.currentCategory.name === category.name;
        }

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;

        /**
         * Creating and Editing
         */

        $scope.isCreating = false;
        $scope.isEditing = false;

        function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;
            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
        }

        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }

        function cancelEditing() {
            $scope.isEditing = false;
        }

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }

        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        $scope.shouldShowEditing = shouldShowEditing;

        /**
         * CRUD
         */

        //create
        function resetCreateForm() {
            $scope.newBookmark = {
                title: "",
                url: "",
                category: $scope.currentCategory.name
            }
        }

        function createBookmark(bookmark) {
            bookmark.id = $scope.bookmarks.length;
            $scope.bookmarks.push(bookmark);
            resetCreateForm();
        }

        $scope.createBookmark = createBookmark;

        //update

        $scope.editedBookmark = null;

        function setEditBookmark(bookmark) {
            $scope.editedBookmark = angular.copy(bookmark);
        }

        function updateBookmark(bookmark) {
            var index = _.findIndex($scope.bookmarks, function (b) {
                return b.id == bookmark.id;
            });

            $scope.bookmarks[index] = bookmark;

            $scope.editedBookmark = null;
            $scope.isEditing = false;
        }

        function isSelectedBookmark(bookmarkId) {
            return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
        }

        $scope.setEditBookmark = setEditBookmark;
        $scope.updateBookmark = updateBookmark;
        $scope.isSelectedBookmark = isSelectedBookmark;

        //delete

        function removeBookmark(bookmark) {
            _.remove($scope.bookmarks, function (b) {
                return b.id == bookmark.id;
            });
        }

        $scope.removeBookmark = removeBookmark;

    });
