/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('categories.bookmarks', [
    'devarchi33.models.categories',
    'devarchi33.models.bookmarks',
    'categories.bookmarks.create',
    'categories.bookmarks.edit'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.categories.bookmarks', {
                url: "categories/:category",
                views: {
                    'bookmarksTmpl@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksListCtrl as bookmarksListCtrl'
                    }
                }
            })
    })

    .controller('BookmarksListCtrl', function ($scope, $stateParams, BookmarksModel) {
        var bookmarksListCtrl = this;

        /**
         * ex) http://localhost:63343/devarchi33-javascript/angular-architecture-origin/index.html#/categories/Wow
         */
        bookmarksListCtrl.currentParam = $stateParams.category;
        BookmarksModel.getBookmarkList()
            .then(function (result) {
                bookmarksListCtrl.bookmarks = result;
            });
    });
