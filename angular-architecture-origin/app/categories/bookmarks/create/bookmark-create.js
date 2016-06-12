/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('categories.bookmarks.create', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.categories.bookmarks.create', {
                url: '/bookmark/create',
                templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
                controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
            })
    })

    .controller('CreateBookmarkCtrl', function () {

    })
;

