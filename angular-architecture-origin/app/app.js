/**
 * Created by donghoon on 2016. 6. 10..
 */
angular.module("App", [
    'ui.router',
    'categories',
    'categories.bookmarks'
])
    .run(function () {
        console.log("My app is ready!");
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('app', {
            url: '',
            abstract: true
        });

        $urlRouterProvider.otherwise("/");
    })

    .controller("MainCtrl", function ($scope, $state) {
        $scope.greeting = "Hello My App!";

        $scope.currentCategory = null;

        function setCurrentCategory(category) {
            $scope.currentCategory = category;

            /**
             * ui-sref 와 같은 기능을 함.
             */
            // $state.go('app.categories.bookmarks', {category: category.name});

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
