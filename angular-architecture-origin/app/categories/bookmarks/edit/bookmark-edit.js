/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('categories.bookmarks.edit', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.categories.bookmarks.edit', {
                url: '/bookmark/:bookmarkId/edit',
                templateUrl: 'app/categories/bookmarks/edit/bookmark-edit.tmpl.html',
                controller: 'EditBookmarkCtrl as editBookmarkCtrl'
            })
    })

    .controller('EditBookmarkCtrl', function () {

    })
;

