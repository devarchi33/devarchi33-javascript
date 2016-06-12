/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('devarchi33.models.categories', [])

    .service('CategoriesListModel', function ($http) {
        var model = this,
            URLS = {
                FETCH: 'data/categories.json'
            },
            categories;

        function extract(result) {
            return result.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        model.getCategoryList = function () {
            return $http.get(URLS.FETCH)
                .then(cacheCategories);
        }

    });

