/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('devarchi33.models.categories', [])

    .service('CategoriesListModel', function ($http, $q) {
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
            return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
        };

        model.getCategoryByName = function (categoryName) {

            var deffered = $q.defer();

            function findCategory() {
                return _.find(categories, function (c) {
                    return c.name == categoryName;
                })
            }

            if (categories) {
                deffered.resolve(findCategory());
            } else {
                model.getCategoryList()
                    .then(function (result) {
                        deffered.resolve(findCategory);
                    })
            }

            return deffered.promise;
        }

    });

