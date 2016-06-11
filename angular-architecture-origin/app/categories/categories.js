/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('categories', [
    'devarchi33.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider.state("app.categories", {
            url: '/',
            views: {
                'categoriesTmpl@': {
                    templateUrl: 'app/categories/categories.tmpl.html',
                    controller: 'CategoriesCtrl'
                },
                'bookmarksTmpl@': {
                    templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                    controller: 'BookmarksCtrl'
                }
            }
        })
    })

    .controller("CategoriesCtrl", function CategoriesCtrl($scope) {
    })

    .controller("BookmarksCtrl", function BookmarksCtrl($scope) {
    });

